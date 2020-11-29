<template>
	<div class="Register">
		<div class="register-input-container">
			<p>Register</p>
			<b-form-group
				id="fieldset-1"
				label="Enter your email address"
				label-for="input-1"
				valid-feedback="Thank you!"
				:invalid-feedback="invalidFeedback"
				:state="state">
				<b-form-input id="input-1" v-model="email" :state="state" trim></b-form-input>
			</b-form-group>
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
				repassword: '',
			};
		},
		computed: {
			state() {
				return this.email.length >= 4;
			},
			invalidFeedback() {
				if (this.email.length > 0) {
					return 'Enter email address.';
				}
				return 'Enter email address.';
			},
		},
	};
</script>
<style>
	.register-input-container p {
		font-size: 30px;
	}
	.register-input-container {
		width: 70%;
		text-align: left;
		margin: 0 auto;
	}
</style>