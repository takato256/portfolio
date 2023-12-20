<template>
  <div>
    <div class="header-container">
      <h1 class="header-title">Nakaya's Portfolio</h1>
    </div>
    <img class="header-image" src="@/assets/nakaya.png">
  </div>
</template>

<style>
  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
  }

  .header-title {
    width: 50vw;
    text-align: center;
    margin-top: -20px;
  }

  .header-image {
    max-width: 20%;
    height: auto;
  }
</style>
