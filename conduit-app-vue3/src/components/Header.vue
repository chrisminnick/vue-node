<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">Conduit</router-link>

      <ul class="nav navbar-nav flex-row">
        <li class="nav-item p-2">
          <router-link class="nav-link" active-class="active" exact to="/">
            Home</router-link
          >
        </li>
        <li class="nav-item p-2">
          <router-link class="nav-link" active-class="active" exact to="/login">
            Sign in
          </router-link>
        </li>
        <li class="nav-item p-2">
          <a class="nav-link">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
