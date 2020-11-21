<template>
  <div class="Main">
	여긴 메인
	<router-link to="/home">Go to home</router-link>
  </div>
</template>
<script>
export default {
	name: 'Main',
}
</script>
<style scoped>
	.Main{
		width : 100%;
		height : 100%;
		background-color : yellow;
	}
</style>