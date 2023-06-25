<template>
	<AppRoot>
		<AppDrawer
			v-if="isHomePage"
			title="Impin"
			:isShown="isDrawerVisible"
			@update:isShown="(state) => (isDrawerVisible = state)"
		>
		</AppDrawer>
		<AppContainer style="padding-top: 60px" class="">
			<AppToolbar
				:title="$route.meta.title"
				@onClickMenuItem="(name) => (isDrawerVisible = true)"
			/>
			<NuxtPage />
		</AppContainer>
	</AppRoot>
</template>
<script setup lang="ts">
	const route = useRoute();
	const showDrawer = ref(true);
	const isDrawerVisible = ref(false);

	function onClickMenuItem(name: String) {
		switch (name) {
			case "navIcon":
				break;
			default:
				break;
		}
	}
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
	const isHomePage = computed(() => {
		return route.name == "index";
	});

	useHead({
		title: route.meta.name,
	});

	useSeoMeta({
		ogTitle: "Impin",
	});
</script>
<style>
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
