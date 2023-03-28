<!-- <script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->
<script>
  import { initializeApp } from "firebase/app";

  import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
  import { getDatabase, ref, child, get, set, push } from "firebase/database";

  // Follow this pattern to import other Firebase services
  // import { } from 'firebase/<service>';

  // TODO: Replace the following with your app's Firebase project configuration
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

  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  let defaultFirestore = getFirestore(app);
  const db = getDatabase();
  let items = {};
  const dbRef = ref(getDatabase());
  get(child(dbRef, `posts`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        items = snapshot.val();
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  //   //DB 생성
  //   function writeUserData() {
  //     const db = getDatabase();
  //     set(ref(db, "/"), {
  //       attend: false,
  //       name: "woojin",
  //       img_src: " d",
  //     });
  //   }
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
  //   let page = 1;
  //   let limit = 10;

  //   $: items = fetch(
  //     `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  //   ).then((response) => response.json());

  //   function nextPage() {
  //     page = page + 1;
  //   }
</script>

<!-- <header>
  <div class="wrap">
    <h1 class="main-title">REST API PAGE</h1>
    <p>페이지 소개 : api를 이용한 테스트 페이지 입니다.</p>
  </div>
</header>
<div class="info">
  <div class="wrap">
    <span>PAGE: {page}</span>
  </div>
</div>
<div class="main" id="main">
  {#await items}
    <p>...Loading</p>
  {:then items}
    <ul>
      {#each items as item, index}
        <li>
          <p>[{item.id}] {item.title}</p>
        </li>
      {/each}
    </ul>
  {:catch error}
    <p>오류가 발생했습니다.</p>
  {/await}

  <a href="#null" class="btn-blue" on:click={nextPage}>NEXT PAGE</a>
</div> -->
<!-- <div>
  {#each Object.entries(items) as [key, value]}
    <div>
      {key},{value.name}
    </div>
  {/each}
</div> -->

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
      <!-- <div>
		  {key},{value.name}
		</div> -->
      <tr>
        <td>{value.name}</td>
        <td>{value.attend}</td>
        <td>{value.img_src}</td>
      </tr>
    {/each}
  </tbody>
</table>
