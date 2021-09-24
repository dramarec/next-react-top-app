// eslint-disable-next-line no-undef
module.exports = {
	// images: {
	// 	domains: ['courses-top.ru']
	// },
	// images: {
	// 	disableStaticImages: true,
	// },
	extends: [
		//...
		'plugin:@next/next/recommended',
		"eslint:recommended",
		"next"
	],
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: { plugins: [{ removeViewBox: false }] },
					},
				},
			],
		});
		return config;
	},


	// webpack(config) {
	// 	config.module.rules.push({
	// 		test: /\.svg$/,
	// 		use: ["@svgr/webpack"],
	// 	});

	// 	return config;
	// },

	////////

	// webpack(config, options) {
	// 	// const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
	// 	// fileLoaderRule.exclude = /\.svg$/;
	// 	config.module.rules.push({
	// 		loader: '@svgr/webpack',
	// 		options: {
	// 			prettier: false,
	// 			svgo: true,
	// 			svgoConfig: {
	// 				plugins: [{ removeViewBox: false }],
	// 			},
	// 			titleProp: true,
	// 		},
	// 		test: /\.svg$/,
	// 	});
	// 	return config;
	// }

};