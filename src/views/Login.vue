<template>
  <div class="container">
    <form class="form">
      <h1>Login</h1>
      <div class="row">
        <label>Email</label>
        <input type="text" />
      </div>
      <div class="row">
        <label>Password</label>
        <input type="password" />
      </div>
      <div class="row">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
});
</script>
