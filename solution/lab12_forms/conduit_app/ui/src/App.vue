<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Home,
    Header  
  }
}
</script>

<style>
</style>
