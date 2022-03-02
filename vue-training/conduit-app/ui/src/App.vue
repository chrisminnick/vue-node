<template>
  <div id="app">
    <PageHeader />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello World Vue.js App" />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    HelloWorld,
  },
};
</script>

<style></style>
