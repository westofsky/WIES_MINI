<template>
	<div class="Login">
		<div class="wrap_form">
			<router-link to="/" style="margin-right:15px">홈</router-link><br>
			<p>로그인</p>
			<div class="login-input-container">
				<b-form-group class="login-input-id" label="이메일">
					<b-form-input ref="input_email" v-model="user.input_id" type="text"/>
				</b-form-group>
				<b-form-group class="login-input-pw" label="비밀번호">
					<b-form-input v-model="user.input_pw" type="text"/>
				</b-form-group>
				<b-button class="login-input-btn" variant="outline-primary">로그인</b-button>
			</div>
			<router-link to="/register" style="margin-left:15px">아직 계정이 없나요?</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Login',
		data(){
			return {
				user : {
					input_id : '',
					input_pw : '',
				}
			}
		},
		mounted(){
			this.$refs.input_email.focus();
		}
	};
</script>
<style scoped lang="scss">
	.wrap_form p {
		font-size: 30px;
	}
	.login-input-container {
		width: 70%;
		text-align: left;
		margin: 0 auto;
	}
	.login-input-container .login-input-btn{
			width: 100%;
			text-align : center;
			margin-top: 20px;
			margin-bottom: 20px;
		}
</style>