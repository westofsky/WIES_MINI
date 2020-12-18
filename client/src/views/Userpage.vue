<template>
	<div class="Userpage">
		{{userdata}}<br>
		
		<p @click = "logout">
			로그아웃
		</p>
	</div>
</template>
<script>
	
	export default {
		name: 'Userpage',
		props : {
			user_email : {
				type : String,
				default : '',
			},
		},
		components : {
		},
		data(){
			return{
				userdata : '',
			}
		},
		created () {
			const user_email = sessionStorage.getItem("user_email");
			this.$http.get('/api/users?user_email='+user_email)
			.then((response) => {
				this.userdata = response.data.data;
			}).catch((err) =>{
				this.usedata = err;
			})
		},
		computed: {
		},
		methods : {
			logout(){
				sessionStorage.removeItem("user_email");
				this.$router.push('/');
				this.$router.go()
			}
		}
	};
</script>
<style scoped>
	
</style>