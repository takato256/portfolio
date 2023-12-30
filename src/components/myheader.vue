<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="mx-auto d-flex">
        <div class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <router-link class="text-white px-3" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-white px-3" to="/career">Career</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-white px-3" to="/product">Product</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-white px-3" to="/skill">Skill</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 5px;
  }
}
</style>
