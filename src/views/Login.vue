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

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.container .form {
  color: white;
  min-height: 400px;
  min-width: 400px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.row {
  width: 100%;
}

.row input {
  width: 100%;
  padding: 10px;
}
</style>
