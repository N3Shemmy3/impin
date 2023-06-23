<template>
	<div
		class="outline relative rounded-md outline-none border-2 border-colorOutlineLight dark:border-colorOutlineDark focus-within:border-colorPrimaryLight dark:focus-within:border-colorSecondaryDark"
	>
		<input
			:name="label"
			:type="type"
			:value="modelValue"
			placeholder=" "
			@input="$emit('update:modelValue', $event.target.value)"
			class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
		/>
		<label
			:for="label"
			class="absolute label top-0 text-lg bg-colorBackgroundLight dark:bg-colorBackgroundDark mx-4 py-4 -z-1 duration-300 origin-0"
			>{{ label }}</label
		>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		label: String,
		modelValue: String,
		type: String,
		placeholder: String,
	});
	defineEmits(["update:modelValue"]);
</script>
<style scoped>
	.outline input:focus-within ~ label,
	.outline input:not(:placeholder-shown) ~ label {
		@apply transform scale-75 -translate-y-4 z-0 ml-3 px-1 py-0;
	}
	.label {
		pointer-events: none;
	}
</style>
