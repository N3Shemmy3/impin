<template
	><Icon
		name="map:gym"
		:size="size ? size : '24px'"
		class="text-colorPrimaryLight"
	/>
</template>
<script setup lang="ts">
	defineProps({
		size: String,
	});
</script>
