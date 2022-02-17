import GlobalStyle from "../src/styles/global/GlobalStyle";
import GlobalFonts from "../src/styles/fonts/";

export const decorators = [
	Story => (
		<>
			<GlobalFonts />
			<GlobalStyle />
			<div className="root-container">
				<div className="root">
					<Story />
					<div id="modal"></div>
				</div>
			</div>
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: "fullscreen",
};
