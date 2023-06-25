<template>
	<div
		class="fixed top-0 z-50 flex w-full shadow-sm min-h-[56px] px-2 py-2 space-x-2 items-center bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
	>
		<IconButton
			v-if="$route.name == 'index'"
			:icon="isTabletMode ? '' : 'ic:outline-menu'"
			@click="emit('onClickMenuItem', 'navIcon')"
		/>
		<IconButton v-else icon="ic:round-arrow-back" @click="goBack" />
		<h1 class="text-lg sm:hidden">{{ props.title }}</h1>
		<div class="flex w-full">
			<input
				type="text"
				placeholder="Type to search"
				onselectstart="return true"
				class="min-h-[48px] w-full flex-grow bg-transparent select-text outline-none"
			/>
		</div>
		<IconButton icon="ic:outline-notifications" />
		<Avatar src="https://avatars.githubusercontent.com/u/67279072?v=4" />
	</div>
</template>

<script setup>
	const router = useRouter();
	const route = useRoute();
	const props = defineProps({
		title: String,
	});
	const emit = defineEmits(["onClickMenuItem", "submit"]);
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
	const goBack = () => {
		setTimeout(() => {
			router.back();
		}, 200);
	};
</script>
