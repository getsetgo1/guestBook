<script>
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, child, get, set, push } from "firebase/database";
  import { Modal, Button } from "flowbite-svelte";
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
  let defaultModal = false;

  // 파이어베이스 실행 함수
  initializeApp(firebaseConfig);

  // 파이어베이스 db로부터 데이터 불러오기
  const db = getDatabase();
  let items = {};
  const dbRef = ref(getDatabase());

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
  function addEvent() {
    addUser(name, team);
    name = "";
    team = "";
  }
  let name = "";
  let team = "";
</script>

<input bind:value={name} class="form-control" />
<input bind:value={team} class="form-control" /><button
  on:click={() => addEvent()}
  class="btn btn-primary">추가</button
>
