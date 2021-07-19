import { Flex } from "theme-ui";

export const preset = {
	breakpoints: [
		'500px', '800px', '1600px', '4000px',
	],
	space: [
		0,
		8,
		16,
		24,
		32,
		64,
		128,
		256,
	],
	sizes: ['60%', '85%', '90%', '95%'],
	fonts: {
		body: 'Regular, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		display: 'DemiBold',
		button: 'Medium',
		monospace: '"Roboto Mono", monospace',
	},
	fontSizes: [
		14,
		16,
		18,
		24,
		36,
		48,
		64,
		72,
	],
	fontWeights: {
		body: 500,
		heading: 500,
		display: 600,
		bold: 700
	},
	lineHeights: {
		body: 1.6,
		heading: 1.125,
		display: 1.2,
		button: '0px',
	},
	letterSpacing: {
		display: '-0.02em',
		button: '0.2em',

	},
	colors: {
		text: '#363945',
		background: '#fff',
		primary: '#7c71fc',
		secondary: '#5352FC',
		muted: '#ece6fe'
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body'
		},
		p: {
			color: 'text',
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body'
		},
		a: {
			fontFamily: 'button',
			lineHeight: 'body',
			fontWeight: 'body',
			textDecoration: 'none',
			color: 'text',
			fontSize: 2,
			'&:hover': {
				color: 'primary',
				borderBottom: '2px solid #7c71fc',
		 	}
		},
		img: {
			maxWidth: '100%'
		}
	},
	links: {
		footer: {
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body',
			letterSpacing: 'body',
			textDecoration: 'none',
			color: 'text',
			fontSize: 2,
			'&:hover': {
				color: 'primary',
		 	}
		}
	},
	text: {
		default: {
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body',
			letterSpacing: 'body',
			color: 'text',
			fontSize: 2,
		},
		display: {
			fontFamily: 'display',
			fontWeight: 'display',
			lineHeight: 'display',
			letterSpacing: 'display',
			color: 'text',
			fontSize: [4, 5, 6, 6]
		},
		title: {
			fontFamily: 'display',
			fontWeight: 'display',
			lineHeight: 'display',
			letterSpacing: 'display',
			color: 'text',
			fontSize: 4
		},
		subtitle: {
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body',
			letterSpacing: 'display',
			color: 'primary',
			fontSize: 2
		},
		h3: {
			fontFamily: 'display',
			fontWeight: 'bold',
			lineHeight: 'body',
			letterSpacing: 'display',
			color: 'text',
			fontSize: 2
		},
		logo: {
			fontFamily: 'display',
			fontWeight: 'bold',
			lineHeight: 'body',
			letterSpacing: '-0.05em',
			color: 'primary',
			fontSize: '24px'
		}
	},
	buttons: {
		primary: {
			fontFamily: 'medium',
			lineHeight: 'button',
			letterSpacing: 'button',
			height: '42px',
			maxWidth: '160px',
		  	color: 'white',
		  	bg: 'primary',
			cursor: 'pointer',
		  	'&:hover': {
				bg: 'secondary',
		 	}
		},
		secondary: {
			fontFamily: 'medium',
			lineHeight: 'button',
			letterSpacing: 'button',
			border: '2px solid #7C71FC',
			boxSizing: 'border-box',
			borderRadius: '4px',
			height: '42px',
			maxWidth: '160px',
		  	color: 'primary',
			bg: 'white',
			cursor: 'pointer',
		  	'&:hover': {
				bg: 'muted',
		 	}
		},
		small: {
			maxWidth: '56px',
			width: '56px',
			height: '36px',
			lineHeight: '0px',
			padding: 0,
			textAlign: 'center',
		},
		round: {
			maxWidth: '160px',
			width: '160px',
			height: '42px',
			borderRadius: '32px',
			lineHeight: '0px',
			padding: 0,
			textAlign: 'center',
			cursor: 'pointer',
		  	'&:hover': {
				bg: 'secondary',
		 	}
		}
	  }
};

export default preset;
