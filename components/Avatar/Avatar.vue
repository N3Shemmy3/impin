<template>
	<img
		v-if="$props.src"
		:src="$props.src"
		alt="A"
		class="h-12 w-12 text-lg rounded-full bg-transparent object-cover"
	/>
</template>

<script setup lang="ts">
	defineProps({
		src: String,
	});
</script>
