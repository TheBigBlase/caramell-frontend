<script setup lang="ts">
import Button from "../components/ButtonReadData.vue";

defineProps({
  brk_str: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <Button :brk=JSON.parse(brk_str)></Button>
</template>
