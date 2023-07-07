<script setup lang="ts">
import Button from "../components/ButtonGoToBroker.vue"
</script> 

<template>
  <div class="about">
    <h1>why isnt this centered</h1>
  </div>
  <div>
		anyway, heres a list of brokers. Goals TODO make this list interactive, w/ v-for n whatnot
	</div>
	<Button v-for="(brk, index) in brokerList" :key=index :brk=brk>
		<br/>
	</Button>
</template>

<script lang="ts">
type Broker_t = {
	ip: string,
	port: number,
	address: string
};

export default {
	data() {
		return {
			brokerList: Array<Broker_t>
		}
	},
	async mounted() {

			const requestOptions = {
				headers: {
          "Access-Control-Allow-Origin": "*",
				}
			};

			let port: number = import.meta.env.VITE_BACK_PORT;
			let host = import.meta.env.VITE_IP;

			console.log(import.meta.env);
			let res = await (
					await fetch(
						`http://${host}:${port}/brokerList`, requestOptions
					)
				).json();
			this.brokerList = res;
	},
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
		padding: 20%
  }
}

.about {
	display: flex;
	align-items: center;
}

</style>
