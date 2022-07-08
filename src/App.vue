<template>
  <div class="app">
    <nav class="nav">
      <ul class="menu">
        <li class="logo item"><router-link to="/">Vidly</router-link></li>
        <li class="item"><router-link to="#">New Rentals</router-link></li>
        <li class="item"><router-link to="#">Customers</router-link></li>
        <li class="item"><router-link to="#">Movies</router-link></li>
        <div class="align-right">
          <li class="item"><router-link to="#">Register</router-link></li>
          <li class="item"><router-link to="/login">Login</router-link></li>
        </div>
      </ul>
    </nav>
    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.nav {
  background: #203647;
  margin-bottom: 10px;
}
/* Applies to router links */
.nav a {
  color: white;
  text-decoration: none;
}
.nav .menu {
  display: flex;
  list-style-type: none;
}
.nav .logo {
  font-size: 30px;
}
.nav .item {
  margin: 10px;
  align-self: center;
}
.align-right {
  display: flex;
  margin-left: auto;
}
</style>
