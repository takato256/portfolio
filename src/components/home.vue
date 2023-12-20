<template>
  <div>
    <h1 class="header-title">Nakaya's Portfolio</h1>
    <img class="header-image" src="@/assets/nakaya.png">
    <div class="social-links">
      <a href="https://github.com/takato256" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/github.png" alt="GitHub">
      </a>
      <a href="https://twitter.com/nakayaa_t" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/x.jpg" alt="X">
      </a>
      <a href="https://www.instagram.com/takato_0510/?igshid=YzVkODRmOTdmMw%3D%3D" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/instagram.png" alt="Instagram">
      </a>
    </div>
  </div>
</template>

<style>
  .header-title {
    width: 50%;
    margin: 0 auto;
    margin-top: 60px;
  }

  .header-image {
    max-width: 20%;
    height: auto;
    margin-top: 20px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .social-links a {
    margin: 0 10px; /* リンク間の余白（調整してください） */
  }

  .social-links img {
    width: 30px; /* アイコンの幅（調整してください） */
    height: 30px; /* アイコンの高さ（調整してください） */
  }
</style>
