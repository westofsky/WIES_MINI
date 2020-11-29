<template>
	<div class="CheckEmail">
		<p>이메일을 인증해주세요</p>
		<div class = "explain_area">
			등록하신 {{input_email}} 주소로 인증 링크를 보냈습니다.<br>
			해당 링크를 눌러 계정 생성 단계를 마무리해주세요.
			<b-button @click="onCheckEmailClicked" class="checkemail-ok-btn" variant="primary">
				로그인 페이지로 이동
			</b-button>
		</div>
	</div>
</template>
<script>
	export default{
		name: "CheckEmail",
		props:{
			input_email:{
				type: String,
				defualt: ''
			}	
		},
		data(){
			
		},
		methods:{
			onCheckEmailClicked(){
				// 이걸로 페이지 이동하면 왜 로그인 페이지에서 작동이 안될까
				this.$router.push('/login');
			}
		}
	}
</script>
<style>
	p{
		font-size: 30px;
	}
	explain_area{
		width: 70%;
		text-align: left;
		margin: 0 auto;
	}
    .checkemail-ok-btn{
		width: 70%;
		margin-top: 40px;
		margin-bottom: 20px;
		text-align: center;
    }
</style>