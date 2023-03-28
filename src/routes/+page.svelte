<script>
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, child, get, set, push } from "firebase/database";

  // 파이어베이스 접근권한 필요요소
  const firebaseConfig = {
    apiKey: "AIzaSyCQLaKjFWCt67i-1gZ0XkhzR6UBRE0diMA",
    authDomain: "signature-514.firebaseapp.com",
    databaseURL:
      "https://signature-514-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "signature-514",
    storageBucket: "signature-514.appspot.com",
    messagingSenderId: "876239622279",
    appId: "1:876239622279:web:01f16832de6b22e99fa822",
  };

  // 파이어베이스 실행 함수
  initializeApp(firebaseConfig);

  // 파이어베이스 db로부터 데이터 불러오기
  const db = getDatabase();
  let items = {};
  const dbRef = ref(getDatabase());
  get(child(dbRef, `posts`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        items = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // 임시 데이터
  const data = [
    { name: "박우진", team: "플랫폼팀" },
    { name: "이동규", team: "플랫폼팀" },
    { name: "한윤희", team: "플랫폼팀" },
    { name: "신대호", team: "플랫폼팀" },
    { name: "이태화", team: "플랫폼팀" },
    { name: "이슬기", team: "임상팀" },
    { name: "안보미", team: "임상팀" },
    { name: "임현아", team: "임상팀" },
  ];

  //   data.map((item) => addUser(item.name, item.team));

  // 파이어베이스 유저 입력
  function addUser(name, team) {
    const postListRef = ref(db, "posts");
    const newPostRef = push(postListRef);
    set(newPostRef, {
      attend: false,
      name,
      img_src: "",
      team,
    });
  }
 
</script>


<table class="table-auto">
  <thead>
    <tr>
      <th>name</th>
      <th>attend</th>
      <th>autograph</th>
    </tr>
  </thead>
  <tbody>
    {#each Object.entries(items) as [key, value]}
      <tr>
        <td>{value.name}</td>
        <td>{value.attend}</td>
        <td>{value.img_src}</td>
      </tr>
    {/each}
  </tbody>
</table>
