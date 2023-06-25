<template>
	<BaseCard
		onclick="$router.push('video/1')"
		to="video/1"
		class="w-full cursor-pointer hover:opacity-70"
	>
		<div class="relative h-[180px] sm:h-[160px] w-full">
			<img
				class="h-full w-full z-0 rounded-md object-cover"
				src="https://plus.unsplash.com/premium_photo-1673480195911-3075a87738b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
				alt="thumbnail"
			/>
			<h6
				ref="duration"
				class="absolute bottom-0 z-10 end-0 p-1 rounded-tl-md text-[12px] bg-colorBackgroundDark bg-opacity-50"
				>10:23
			</h6>
		</div>
		<div class="w-full px-2 py-2 space-y-1">
			<h6 class="text-base">Video Title</h6>
			<div class="flex space-x-2">
				<img
					class="h-10 rounded-full"
					:draggable="false"
					src="https://yt3.ggpht.com/ytc/AGIKgqNdAUR6Pma-Omlll4fSn-RU3COxf-RMj3Hk3O8NQg=s68-c-k-c0x00ffffff-no-rj"
					alt="Avatar"
				/>
				<div class="opacity-80">
					<h6 class="text-sm">Dawid Does Tech</h6>
					<div class="flex space-x-2 text-[12px]">
						<p>222K Views</p> <hr />. <p>12Hrs ago</p> .
					</div>
				</div>
			</div>
		</div>
	</BaseCard>
</template>
