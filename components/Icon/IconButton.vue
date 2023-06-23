<template>
	<button
		ref="button"
		v-if="icon"
		v-Ripple
		class="flex cursor-pointer outline-none noSelect h-12 w-12 rounded-full bg-transparent hover:bg-colorPrimaryContainerLight hover:dark:bg-colorPrimaryContainerDark hover:bg-opacity-10 dark:hover:bg-opacity-10"
	>
		<Icon v-Ripple type="button" class="m-auto icon" :name="icon" size="24px" />
	</button>
</template>

<script setup lang="ts">
	enum Background {
		Normal = 1,
		Accented = 3,
		Filled = 2,
		Outlined = 4,
	}
	defineProps({
		icon: String,
		color: String,
		type: {
			type: Number,
			validator(value: Background) {
				// The value must match one of these strings
				return [
					Background.Filled,
					Background.Accented,
					Background.Outlined,
				].includes(value);
			},
			default: Background.Normal,
		},
	});
	const emit = defineEmits(["inFocus", "submit"]);
	const button = ref();

	function getBackgroundType(type: Number | undefined) {
		var background;
		switch (type) {
			case Background.Accented:
				background =
					"bg-opacity-20 bg-colorPrimaryContainerLight dark:bg-colorPrimaryContainerDark";
				break;

			case Background.Filled:
				break;

			case Background.Outlined:
				background =
					"border border-colorOutlineLight dark:border-colorOutlineDark";
				break;

			default:
				background = "bg-transparent";
				break;
		}
		return "";
	}
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
