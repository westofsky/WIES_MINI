<template>
  <div id="app">
	<MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from './views/Main.vue'
export default {
	name: 'App',
	components: {
		MainPage
	}
}
</script>

<style>
	html,body{
		width : 100%;
		height : 100%;
	}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width : 100%;
  height : 100%;
}
</style>
