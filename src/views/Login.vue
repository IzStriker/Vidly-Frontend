<template>
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <h1>Login</h1>
      <div class="row">
        <label>Email</label>
        <input v-model="formData.email" type="email" required />
      </div>
      <div class="row">
        <label>Password</label>
        <input v-model="formData.password" type="password" required />
      </div>
      <div class="error-message">{{ errorMessage }}</div>
      <div class="row">
        <input type="submit" value="Login" required />
      </div>
      <div class="row" style="text-align: center">
        <router-link to="/register">Create an account here</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserLogin } from '@/models/user';
import { mapActions } from 'vuex';
import { AuthActions } from '@/store/auth/types';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      formData: {} as UserLogin,
      errorMessage: '' as string,
    };
  },
  methods: {
    ...mapActions([AuthActions.LOGIN]),

    async onSubmit() {
      try {
        this.errorMessage = '';
        await this.Login(this.formData);
      } catch (error: any) {
        this.errorMessage = 'Incorrect Username or Password';
        // clear form
        this.formData = {} as UserLogin;
      }
    },
  },
});
</script>
