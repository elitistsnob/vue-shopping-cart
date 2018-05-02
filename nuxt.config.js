module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: "Sweetwater Vue Cart Test Project",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "Nuxt.js project" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, 
			{href:"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700", rel:"stylesheet"},
			{href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,800,900", rel:"stylesheet"}
		]
	},

	/*
	** Customize the progress bar color
	*/
	loading: { color: "#3B8070" },

	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}
		}
	}
};
