<template>
	<transition name="fade">
		<div v-if="show" class="preloader">
			<div class="logo"></div>
			<p>Loading!</p>
			<div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
			 <div class="loader"></div> 
		</div>
	</transition>
</template>


<script>
import "../styles/style.sass"
export default {
	name: 'preloader',
	data(){
		return {
			show: true
		}
	},
	mounted(){
		if(Boolean(this.show)) this.showToggle()
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = false
			}, 700)
		}
	}
}
</script>
<style lang="scss">
  @import "../styles/style.sass";
  .loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>