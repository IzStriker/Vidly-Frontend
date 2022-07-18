<template>
  <div class="container">
    <form class="form" @submit="onSubmit">
      <h1>Login</h1>
      <div class="row">
        <label>Email</label>
        <input v-model="formData.email" type="email" required />
      </div>
      <div class="row">
        <label>Password</label>
        <input v-model="formData.password" type="password" required />
      </div>
      <div class="row">
        <input type="submit" value="Login" required />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserLogin } from '@/models/user';
import { loginUser } from '@/api';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      formData: {} as UserLogin,
      errorMessage: '' as string,
    };
  },
  methods: {
    async onSubmit(e: Event) {
      e.preventDefault();

      try {
        let res = await loginUser(this.formData);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
