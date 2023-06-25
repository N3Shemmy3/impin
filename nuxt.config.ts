// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
	app: {
		baseURL: "/impin/",
	},
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	css: ["@/assets/css/tailwind.css", "@/assets/fonts/product.css"],
	plugins: [
		"@/plugins/vRipple.js", // only in client side
	],
});
