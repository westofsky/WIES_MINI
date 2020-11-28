<template>
	<div class="Login">
		<div class = "wrap_form">
			<p>Login</p>
			<div class="login-input-container">
				<b-form-group class = "login-input-id" label = "ID">
					<b-form-input v-model="title" type="text" placeholder="Your ID" />
				</b-form-group>
				<b-form-group class = "login-input-pw" label = "PASSWORD">
					<b-form-input v-model="title" type="text" placeholder="Your Password" />
				</b-form-group>
            </div>
			<router-link to="/">Go to home</router-link>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Login',
}
</script>
<style>
	.wrap_form p{
		font-size : 30px;
	}
	.login-input-container{
		width : 70%;
		text-align : left;
		margin : 0 auto;
	}
</style>