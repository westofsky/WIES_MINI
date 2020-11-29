<template>
	<div class="Register">
		<p>Register</p>
		<div class="register-input-container">
			<b-form-group
				label="이메일"
				:invalid-feedback="invalidEmail"
				:state="emailState">
				<b-form-input id="input-1" type="email" v-model="email" :state="emailState" trim></b-form-input>
			</b-form-group>
			<b-form-group
				label="비밀번호"
				:invalid-feedback="invalidPassword"
				:state="passwordState">
				<b-form-input id="input-1" type="text" v-model="password" :state="passwordState" trim></b-form-input>
			</b-form-group>
			<b-form-group
				label="비밀번호 확인"
				:invalid-feedback="invalidCheckPassword"
				:state="checkPasswordState">
				<b-form-input id="input-1" type="text" v-model="checkPassword" :state="checkPasswordState" trim></b-form-input>
			</b-form-group>
			<b-button class="register-input-btn" variant="primary"> 계정 생성 </b-button>
		</div>
		<router-link to="/">Go to home</router-link>
	</div>
</template>
<script>
	export default {
		name: 'Register',
		data() {
			return {
				email: '',
				password: '',
				checkPassword: '',
				emailPattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
			};
		},
		computed: {
			emailState() {
				return this.emailPattern.test(this.email) && this.email.length > 0;
			},
			invalidEmail(){
				if (this.email.length == 0) {
					return '이메일 주소를 입력해주세요';
				} else{
					return '이메일 형식을 확인해주세요';
				}
			},
			passwordState(){
				return this.password.length >= 8;
			},
			invalidPassword() {
				if (this.password.length == 0) {
					return '비밀번호를 입력해주세요';
				}
				
				return '비밀번호는 최소 8자리 이상이어야 합니다';
			},
			checkPasswordState(){
				return this.password == this.checkPassword && this.checkPassword.length > 0;
			},
			invalidCheckPassword() {
				if (this.checkPassword.length == 0) {
					return '비밀번호를 입력해주세요';
				}
				
				return '비밀번호가 일치하지 않습니다 ';
			},
		},
	};
</script>
<style>
	p {
			font-size: 30px;
	}
	
	.register-input-container {
		width: 70%;
		text-align: left;
		margin: 0 auto;
	}
	.register-input-container .register-input-btn {
			text-align : center;
	}
</style>