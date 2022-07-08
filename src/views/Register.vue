<template>
  <div class="container">
    <form class="form">
      <h1>Register</h1>
      <div class="input-next-input">
        <div style="margin-right: 2px">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Second Name</label>
          <input type="text" />
        </div>
      </div>
      <div class="row">
        <label>Email</label>
        <input type="text" />
      </div>
      <div class="row">
        <label>Password</label>
        <input type="password" />
      </div>
      <div class="row">
        <label>Confirm Password</label>
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
  name: "Register",
});
</script>

<style scoped>
.container .form {
  min-height: 500px;
}

.input-next-input {
  display: flex;
}
</style>
