<template>
  <div class="container">
    <form class="form" @submit="onSubmit">
      <h1>Register</h1>
      <div class="input-next-input">
        <div style="margin-right: 2px">
          <label>First Name</label>
          <input v-model="formData.firstName" type="text" required />
        </div>
        <div>
          <label>Last Name</label>
          <input v-model="formData.lastName" type="text" required />
        </div>
      </div>
      <div class="row">
        <label>Email</label>
        <input v-model="formData.email" type="email" required />
      </div>
      <div class="row">
        <label>Password</label>
        <input v-model="formData.password" type="password" required />
      </div>
      <div class="row">
        <label>Confirm Password</label>
        <input v-model="formData.confirmPassword" type="password" required />
      </div>
      <div class="row error-message">
        <ul>
          <li v-for="error in errors" :key="error.description">
            {{ error.description }}
          </li>
        </ul>
      </div>
      <div class="row">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserRegister, RegistrationError } from "@/models/user";
import { registerUser } from "@/api";

export default defineComponent({
  name: "Register",
  data() {
    return {
      formData: {} as UserRegister,
      errors: {} as RegistrationError[],
    };
  },
  methods: {
    async onSubmit(e: Event) {
      e.preventDefault();
      this.errors = [];
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.push({
          description: "Password and Confirm Password must match",
        });
        return;
      }

      try {
        await registerUser(this.formData);
        this.$router.push("/login");
      } catch (error: any) {
        if (error.response.data.message) {
          this.errors.push({ description: error.response.data.message });
        } else {
          this.errors = [...this.errors, ...error.response.data.errors];
        }
      }
    },
  },
});
</script>

<style scoped>
.container .form {
  min-height: 500px;
}

.input-next-input {
  display: flex;
}

.error-message {
  color: red;
}
</style>
