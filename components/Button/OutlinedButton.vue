<template>
	<button
		v-Ripple
		class="text-base outline-none noSelect px-4 py-2 rounded-lg border border-colorPrimaryLight text-colorOnBackgroundLight dark:border-colorPrimaryDark dark:text-colorOnBackgroundDark hover:bg-colorPrimaryContainerLight hover:dark:bg-colorPrimaryContainerDark hover:bg-opacity-10 dark:hover:bg-opacity-10"
	>
		<Icon v-if="icon" class="me-1 icon" :name="icon" />
		{{ text }}
	</button>
</template>

<script setup lang="ts">
	defineProps({
		type: String,
		icon: String,
		text: String,
	});
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
