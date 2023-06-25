<template>
	<div
		v-show="isDrawerShown"
		ref="overlay"
		@click="
			$event.target == overlay
				? $emit('update:isShown', false)
				: $emit('update:isShown', isDrawerShown)
		"
		class="fixed z-[80] top-0 left-0 md:z-0 duration-100 transition-all animate-fade-in animate-fade-out overflow-hidden md:relative h-full md:w-[250px] w-full bg-opacity-30 bg-black"
	>
		<Transition name="slide-fade">
			<div
				v-show="isDrawerShown"
				ref="drawer"
				class="fixed h-full p-4 w-[250px] delay-100 duration-300 transition-all ease-in-out overflow-hidden shadow-md md:shadow-none bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
			>
				<div ref="header" class="flex p-4 content-center">
					<h6 class="text-2xl">{{ props.title }}</h6>
				</div>
				<slot class="space-y-1">
					<div class="space-y-1">
						<div
							v-for="item in menuItems"
							v-Ripple
							@click="onClickMenuItem(item)"
							:class="
								item.name == 'Home'
									? 'bg-colorPrimaryContainerLight dark:bg-colorPrimaryContainerDark'
									: 'bg-transparent'
							"
							class="flex group no-select noSelect cursor-pointer transition-all duration-300 w-full min-h-[48px] p-3 items-center py-2 space-x-5 rounded-md hover:bg-colorPrimaryContainerLight hover:dark:bg-colorPrimaryContainerDark hover:bg-opacity-30 dark:hover:bg-opacity-30"
						>
							<Icon
								:name="item.icon"
								size="24px"
								:class="
									item.name == 'Home'
										? 'text-colorOnPrimaryContainerLight dark:text-colorOnPrimaryContainerDark'
										: ''
								"
								class="icon group-hover:text-colorOnPrimaryContainerLight dark:group-hover:text-colorOnPrimaryContainerDark"
							/>
							<h6
								:class="
									item.name == 'Home'
										? 'font-semibold text-colorOnPrimaryContainerLight dark:text-colorOnPrimaryContainerDark'
										: ''
								"
								class="icon group-hover:font-semibold transition duration-300 group-hover:text-colorOnPrimaryContainerLight dark:group-hover:text-colorOnPrimaryContainerDark"
								>{{ item.name }}</h6
							>
						</div>
					</div>
				</slot>
			</div>
		</Transition>
	</div>
</template>
<script setup>
	const props = defineProps({
		title: String,
		isShown: Boolean,
	});
	const emit = defineEmits(["update:isShown"]);
	const menuItems = [
		{
			icon: "ic:outline-home",
			name: "Home",
			route: "/",
		},
		{
			icon: "ic:outline-settings",
			name: "Live",
			route: "",
		},
		{
			icon: "ic:outline-video-library",
			name: "Subscriptions",
			route: "",
		},
		{
			icon: "ic:outline-history",
			name: "History",
			route: "",
		},
		{
			icon: "ic:outline-settings",
			name: "Settings",
			route: "/settings",
		},
	];
	const router = useRouter();
	const overlay = ref();
	const drawer = ref();

	const isDrawerShown = computed(() => {
		return window.innerWidth > 600 ? true : props.isShown;
	});
	function onClickMenuItem(item) {
		emit("update:isShown");
		setTimeout(() => {
			router.push(item.route);
		}, 200);
	}
	onMounted(() => {});
</script>
<style scoped>
	@keyframes fade-out {
		0% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}
	.animate-fade-out {
		animation-delay: 200s;
		animation: fade-out 200ms ease-in-out;
	}
	.slide-side-enter-active,
	.slide-side-leave-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transition: all 0.3s ease-in;
		transform: translateX(-100%);
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
