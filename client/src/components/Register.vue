<template>
	<div class="Register">
		<p>회원가입</p>
		<div class="register-input-container">
			<b-form-group label="이메일" valid-feedback="사용 가능한 이메일입니다" :invalid-feedback="invalidEmail" :state="emailState">
				<b-form-input ref="input_email" type="email" v-model="email" :state="emailState" trim></b-form-input>
			</b-form-group>
			<b-form-group label="비밀번호" valid-feedback="사용 가능한 비밀번호입니다" :invalid-feedback="invalidPassword" :state="passwordState">
				<b-form-input type="password" v-model="password" :state="passwordState" trim></b-form-input>
			</b-form-group>
			<b-form-group label="비밀번호 확인" valid-feedback="확인" :invalid-feedback="invalidCheckPassword" :state="checkPasswordState">
				<b-form-input type="password" v-model="checkPassword" :state="checkPasswordState" trim></b-form-input>
			</b-form-group>
			<b-button :disabled="!emailState || !passwordState || !checkPasswordState" @click="onRegisterButtonClicked" class="register-input-btn" variant="primary">
				계정 생성
			</b-button>
		</div>
		<router-link to="/">홈</router-link>
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
		methods :{
			onRegisterButtonClicked(){
				this.$http.post('/api/users/register', { 
					user_email : this.email,
					user_password : this.password
				}).then((res) => {
					if (res.data.success == true) {
						this.$router.push('/login')  // 로그인한 뒤 메인 페이지로 이동시켜야함
					}
					if (res.data.success == false) {
						alert(res.data.message);
					}
				}).catch(function (error) {
					alert('error')
					console.log(error)
				})
			}
		},
		mounted(){
			this.$refs.input_email.focus();	
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
    }
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
		width: 100%;
		margin-top: 20px;
		margin-bottom: 20px;
		text-align: center;
    }
</style>