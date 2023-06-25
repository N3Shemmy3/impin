<template>
	<AppLayout class="md:flex space-x-2 space-y-4 sm:space-y-0">
		<AppContainer ref="content" class="h-fit flex-grow">
			<div
				ref="videoPlayer"
				class="w-full h-fit sm:w-[70vw] aspect-video rounded-md bg-colorPrimaryContainerDark"
			>
			</div>
		</AppContainer>
		<div ref="more" class="h-full md:w-4/12 flex-col sm:px-4">
			<div
				class="flex h-14 mb-4 px-4 items-center rounded-md bg-colorPrimaryContainerLight dark:bg-colorPrimaryContainerDark bg-opacity-50 dark:bg-opacity-50"
			>
				<h6 class="text-lg flex-grow">Autoplay </h6>
				<label class="switch">
					<input type="checkbox" />
					<span class="slider round"></span>
				</label>
			</div>
			<ItemCard v-for="n in 10" class="" />
		</div>
	</AppLayout>
</template>

<script setup lang="ts"></script>
<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		@apply bg-colorBackgroundLight;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		@apply bg-colorBackgroundLight;
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		@apply bg-colorPrimaryLight;
	}

	input:focus + .slider {
		@apply bg-colorPrimaryLight;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
