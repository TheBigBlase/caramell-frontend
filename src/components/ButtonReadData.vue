<script setup lang="ts">
defineProps({
	brk: {
		type: Object,
		default: {ip: "", port: 0, address:"FIXME"},
	}
});
</script>

<script lang="ts">
export default {
	input: "",
	res: Object,
	created() {
		this.input = "";
		this.input = "Read data from " + this.brk.ip + ":" + this.brk.port
		this.input = '<input type="submit" value="' + this.input + '" class="flex"/>';
		console.log(this.input);
	},
	methods: {
		async onReadAll() {

			const requestOptions = {
				headers: {
          "Access-Control-Allow-Origin": "*",
				}
			};


			let port: number = import.meta.env.VITE_BACK_PORT;
			let host = import.meta.env.VITE_IP;

			let res:String = await (
					await fetch(
						`http://${host}:${port}/brokerList`, requestOptions
					)
				).json();
			this.res = res;
		},
	}
}
</script>

<template>
	<br/>
	<div class="flex"> 
		<form @submit="onReadAll" class="flex">
			<div class="flex">
				<span v-html="input"></span>
			</div>
		</form>
	</div>
</template>

<style scoped>

.flex {
	display: flex;
	width:100%;
	align-content: center;
	flex-wrap: wrap;
	justify-content: center;
}

.flex input {
	width: 30%;
	min-height: 2%;
}
a {
	font-size: 1.2rem;
	text-align: center;
	background-color: #66cc55;
	border-radius: 20px;
	color: black;
	padding: 5px;
	margin-left: 70px;
	margin-right: 70px;
}

h3 {
	padding:0% 5%;
}

@media (min-width: 1024px) {
	a {
		text-align: center;
	}
}
</style>
