<template>
	<div class="Login">
		<div class="wrap_form">
			<router-link to="/" style="margin-right:15px">홈</router-link><br>
			<p>로그인</p>
			<div class="login-input-container">
				<b-form-group class="login-input-email" label="이메일">
					<b-form-input ref="ref_input_email" v-model="user.input_email" type="text"/>
				</b-form-group>
				<b-form-group class="login-input-pw" label="비밀번호">
					<b-form-input v-model="user.input_pw" type="text"/>
				</b-form-group>
				<b-button class="login-input-btn" @click = "onBtnLoginClicked" variant="outline-primary">로그인</b-button>
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
					input_email : '',
					input_pw : '',
				}
			}
		},
		methods :{
			onBtnLoginClicked(){
				if(this.user.input_email && this.user.input_pw){
					this.$http.post('/api/users/login', {
						user: this.user
					}).then(
					(res) => {
						if (res.data.success == true){
							alert("로그인에 성공하였습니다.");
							this.$router.push({name: 'Userpage',});
							this.$router.go()
							sessionStorage.setItem("user_email",this.user.input_email);
							
						}
						else{
							alert(res.data.message);
						}	
					},
					(err) => { 
						// error 를 보여줌
						console.log(err);
					}).catch((err) => {
						console.log(err);
					})
				}
			},
		},
		mounted(){
			this.$refs.ref_input_email.focus();
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