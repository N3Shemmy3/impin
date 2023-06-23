<template>
	<button
		v-Ripple
		class="text-base outline-none noSelect px-4 py-2 rounded-lg bg-colorPrimaryLight dark:bg-colorPrimaryDark text-colorOnPrimaryLight dark:text-colorOnPrimaryDark hover:bg-opacity-60"
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
