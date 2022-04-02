<template>
  <div id="app">
    <NavInfo></NavInfo>
    <Nav style="position: sticky; top: 9vh;"></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav/Nav'
  import NavInfo from './components/NavInfo/NavInfo'
  export default {
    name: 'App',
    components: {
      Nav,
      NavInfo
    },
  }
</script>

<style>
#app {
  width: 95vw;
  height: 200vh;
  background-color: #fbfbfb;
}
* {
  margin: 0;
  padding: 0;
}
</style>
