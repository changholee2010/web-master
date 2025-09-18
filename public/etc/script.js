let db;
let currentUser = null;

// === IndexedDB 초기화 ===
const request = indexedDB.open("BoardDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;

  if (!db.objectStoreNames.contains("users")) {
    const userStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
    userStore.createIndex("username", "username", { unique: true });
  }

  if (!db.objectStoreNames.contains("posts")) {
    const postStore = db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
    postStore.createIndex("author", "author", { unique: false });
  }
};

request.onsuccess = function (event) {
  db = event.target.result;
  loadPosts();
};

request.onerror = function (event) {
  console.error("DB 오류:", event.target.error);
};

// === 사용자 등록 ===
function register() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("이름과 비밀번호를 입력하세요.");
    return;
  }

  const tx = db.transaction("users", "readwrite");
  const store = tx.objectStore("users");
  const index = store.index("username");

  const check = index.get(username);
  check.onsuccess = () => {
    if (check.result) {
      alert("이미 존재하는 사용자입니다.");
    } else {
      store.add({ username, password });
      alert("회원가입 완료!");
    }
  };
}

// === 로그인 ===
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const tx = db.transaction("users", "readonly");
  const store = tx.objectStore("users");
  const index = store.index("username");

  const getUser = index.get(username);
  getUser.onsuccess = () => {
    const user = getUser.result;
    if (user && user.password === password) {
      currentUser = user;
      document.getElementById("loginStatus").textContent = `현재 로그인: ${user.username}`;
      document.getElementById("postSection").style.display = "block";
    } else {
      alert("로그인 실패: 잘못된 정보입니다.");
    }
  };
}

// === 글 작성 ===
function addPost() {
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;

  if (!currentUser) {
    alert("로그인 후 글을 작성할 수 있습니다.");
    return;
  }

  if (!title || !content) {
    alert("제목과 내용을 입력하세요.");
    return;
  }

  const tx = db.transaction("posts", "readwrite");
  const store = tx.objectStore("posts");

  const newPost = {
    title,
    content,
    author: currentUser.username,
    timestamp: new Date().toISOString()
  };

  store.add(newPost);
  tx.oncomplete = () => {
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
    loadPosts();
  };
}

// === 게시글 목록 로드 ===
function loadPosts() {
  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  const tx = db.transaction("posts", "readonly");
  const store = tx.objectStore("posts");

  store.openCursor(null, "prev").onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      const post = cursor.value;
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>작성자: ${post.author} | 작성일: ${new Date(post.timestamp).toLocaleString()}</small>
      `;
      postList.appendChild(div);
      cursor.continue();
    }
  };
}
