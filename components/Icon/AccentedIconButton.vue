<template>
	<button
		ref="button"
		v-if="icon"
		v-Ripple
		class="flex cursor-pointer outline-none noSelect h-12 w-12 rounded-full bg-colorPrimaryContainerLight dark:bg-colorPrimaryContainerDark bg-opacity-40 hover:bg-opacity-90"
	>
		<Icon v-Ripple type="button" class="m-auto icon" :name="icon" />
	</button>
</template>

<script setup lang="ts">
	defineProps({
		icon: String,
		color: String,
	});
	const emit = defineEmits(["inFocus", "submit"]);
	const button = ref();
</script>
<style scoped>
	.icon {
		pointer-events: none;
	}
	.noSelect {
		-webkit-tap-highdark-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.noSelect:focus {
		outline: none !important;
	}
</style>
