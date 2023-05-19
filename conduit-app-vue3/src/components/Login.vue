<template>
  <div class="container">
    <h1>Log In Here</h1>
    <form v-on:submit.prevent="onSubmit(username, password)">
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </fieldset>
      <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '../stores/auth';
function onSubmit(username: string, password: string) {
  const authStore = useAuthStore();
  return authStore.login(username, password);
}
const username = ref('');
const password = ref('');
</script>
