<template>
	<div class="Main">
		<div class="menu">
			<router-view/>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Main',
	};
</script>
<style scoped>
	.Main {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.Main::before {
		content: '';
		background: url('../assets/bg-kv-b.jpg');
		background-size: cover;
		opacity: 0.5;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}
	.menu {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		background: rgba(255, 255, 255, 0.5);
		min-width: 400px;
		padding: 40px 0px;
		border-radius: 10px;
	}
</style>