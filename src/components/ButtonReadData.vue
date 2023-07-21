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
		created() {
			this.res = [];
			this.hasSetRes = false;
		},
		data: () => {
			return {
				res: Array,
				hasSetRes: false,

			};
		},


		methods: {
			// TODO this should return a list, and later func would let you read 1 by 1 from returned list
			// No time to do this tho
			async onReadAllSummary() {

				const requestOptions = {
					headers: {
						"Access-Control-Allow-Origin": "*",
					}
				};

				let port: number = import.meta.env.VITE_BACK_PORT;
				let host = import.meta.env.VITE_IP;

				let res:String = await (
						await fetch(
							`http://${host}:${port}/ctrct/${brk.address}/get/all`, requestOptions
						)
					).json();

				console.log(res);
				for(let k of res){
					console.log(k);
					this.res.push(k);
				}

				this.hasSetRes = true
			},

			async onReadAllFiles() {
				const requestOptions = {
					headers: {
						"Access-Control-Allow-Origin": "*",
					}
				};

				let port: number = import.meta.env.VITE_BACK_PORT;
				let host = import.meta.env.VITE_IP;

				let res:String = await (
						await fetch(
							`http://${host}:${port}/brk/${brk.ip}:${brk.port}/get/all`, requestOptions
						)
					).json();

				console.log(res);
				for(let k of res){
					console.log(k);
					this.res.push(k);
				}

				this.hasSetRes = true
			},

		}
	}
</script>

<template>
	<br/>
	<div class="flex"> 
		<span>
			<button @click="this.onReadAllSummary"> request index (summary) data from {{ this.brk.ip }}:{{ this.brk.port }}</button>
			<button @click="this.onReadAllFiles"> request all files from {{ this.brk.ip }}:{{ this.brk.port }} (will be factureted)</button>
		</span>
		<div v-if="hasSetRes">
			<span v-for="(brk, index) in res" :key=index>{{ brk }}</span>
		</div>
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
