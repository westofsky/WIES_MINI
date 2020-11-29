<template>
  <div class="Home">
		<h1>WIES-MINI</h1>
		<hr color=lightblue>
		<p>아무말이나 적어봄</p>
		<router-link to="/login">로그인</router-link><br>
		<router-link to="/register">회원가입</router-link>
  </div>
</template>
<script>
export default {
	name: 'Home',
}
</script>