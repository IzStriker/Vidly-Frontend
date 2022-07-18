<template>
  <div class="app">
    <nav class="nav">
      <ul class="menu">
        <li class="logo item"><router-link to="/">Vidly</router-link></li>
        <li class="item"><router-link to="#">New Rentals</router-link></li>
        <li class="item"><router-link to="#">Customers</router-link></li>
        <li class="item"><router-link to="#">Movies</router-link></li>
        <div class="align-right" v-if="authenticated">
          <li class="item">
            <router-link to="#">
              First Last &lt;user@example.com&gt;
            </router-link>
          </li>
        </div>
        <div class="align-right" v-else>
          <li class="item">
            <router-link to="/register">Register</router-link>
          </li>
          <li class="item">
            <router-link to="/login">Login</router-link>
          </li>
        </div>
      </ul>
    </nav>
    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { AuthGetters } from '@/store/auth/types';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
  computed: {
    ...mapGetters([AuthGetters.AUTHENTICATED]),
  },
});
</script>
t

<style scoped>
.nav {
  background: var(--ShadowDarkBlue);
  margin-bottom: 10px;
}
/* Applies to router links */
.nav a {
  color: var(--ShadowLightBlue);
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
