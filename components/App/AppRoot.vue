<template>
	<div
		ondragstart="return false"
		onselectstart="return false"
		class="relative h-full flex select-none bg-colorBackgroundLight text-colorOnBackgroundLight dark:bg-colorBackgroundDark dark:text-colorOnBackgroundDark"
	>
		<AppSplashScreen v-if="false" />
		<div v-else="!showSplashScreen" class="flex mx-auto w-full">
			<slot />
		</div>
	</div>
</template>
<script setup>
	const showSplashScreen = ref(true);

	onMounted(() => {
		setTimeout(() => {
			showSplashScreen.value = false;
		}, 2000);
	});
</script>
