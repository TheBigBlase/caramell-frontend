<script setup lang="ts">
defineProps({
	brk: {
		type: Object,
		default: {ip: "", port: 0, address:"FIXME"},
	}
});
</script>

<template>
	<router-link :to="{ name: 'Broker', query: { brk_str: JSON.stringify(brk) } }"> 
		{{ brk.ip }}:{{ brk.port }}
	</router-link>
</template>

<style scoped>
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

@media (min-width: 1024px) {
	a {
		text-align: center;
	}
}
</style>
