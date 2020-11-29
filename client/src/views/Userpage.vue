<template>
	<div class="Userpage">
		{{$route.params.userid}}<br>
		<router-link to="/">홈으로가기</router-link><br>
	</div>
</template>
<script>
	export default {
		name: 'Userpage',
		props : {
			userid : {
				type : String,
				default : '',
			},
		},
		data(){
			return{
				userdata : '',
				
			}
		},
		created () {
		},
		computed: {
		}
	};
</script>
<style scoped>
	
</style>