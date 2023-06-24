<template
	><AppLayout class="mx-auto grid gap-4 grid-responsive py-4">
		<BaseCard v-for="n in 10" class="w-full cursor-pointer hover:opacity-70">
			<img
				class="rounded-md object-cover"
				src="https://i.ytimg.com/an_webp/DirxAQtSnmA/mqdefault_6s.webp?du=3000&sqp=CNC526QG&rs=AOn4CLDc2sGZydgle5Rkx-bR8BGKOcJg6A"
				alt="thumbnail"
			/>
			<div class="w-full px-2 py-4 flex space-x-2">
				<img
					class="h-8 rounded-full"
					src="https://yt3.ggpht.com/ytc/AGIKgqNdAUR6Pma-Omlll4fSn-RU3COxf-RMj3Hk3O8NQg=s68-c-k-c0x00ffffff-no-rj"
					alt="Avatar"
				/>
				<div ref="text-content space-y-2">
					<h6 class="text-base">Video Title</h6>
					<div class="text-[16px] opacity-80">
						<h6>Dawid Does Tech</h6>
						<div class="flex space-x-2 text-sm">
							<p>222K Views</p> <hr />. <p>12 Hours ago</p> .
						</div>
					</div>
				</div>
			</div>
		</BaseCard>
	</AppLayout></template
>
<style scoped>
	.grid-responsive {
		grid-area: span;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	}
</style>
