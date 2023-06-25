<template>
	<img
		v-if="$props.src"
		:src="$props.src"
		v-Ripple
		alt="A"
		sele
		class="w-[48px] p-1 text-lg cursor-pointer rounded-full bg-transparent object-cover"
	/>
</template>

<script setup lang="ts">
	defineProps({
		src: String,
	});
</script>
