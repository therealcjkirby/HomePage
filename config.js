// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'CJ 😊',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '0957ffa5097276f6245eff567562a1e2', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '12.5086',
	defaultLongitude: '130.9907',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'Proton Mail',
			icon: 'inbox',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
		},
		{
			id: '4',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '5',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '6',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.proton.me/u/0/',
		},
	
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'monitor-play',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Twitch',
					link: 'https://www.twitch.tv/',
				},
				{
					name: 'Udemy',
					link: 'https://www.udemy.com/',
				},
				{
					name: 'Frontend Masters',
					link: 'https://frontendmasters.com/',
				},
			],
		},
		{
			icon: 'chart-no-axes-gantt',
			id: '2',
			links: [
				{
					name: 'Proton Calendar',
					link: 'https://calendar.proton.me/u/0/',
				},
				{
					name: 'Proton Drive',
					link: 'https://drive.proton.me/',
				},
				{
					name: 'Proton Mail',
					link: 'https://mail.proton.me/u/0/inbox',
				},
				{
					name: 'Google Mail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'zap',
			id: '1',
			links: [
				{
					name: 'Vim Cheatsheet',
					link: 'https://devhints.io/vim',
				},
				{
					name: 'Tmux Cheatsheet',
					link: 'https://tmuxcheatsheet.com/',
				},
				{
					name: 'Vimium Docs',
					link: 'https://github.com/philc/vimium',
				},
				{
					name: 'Glove80 Config',
					link: 'https://sunaku.github.io/moergo-glove80-keyboard.html#layers',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'My Repos',
					link: 'https://github.com/therealcjkirby?tab=repositories',
				},
				{
					name: 'Stars',
					link: 'https://github.com/therealcjkirby?tab=stars',
				},
				{
					name: 'Overview',
					link: 'https://github.com/',
				},
				{
					name: 'Explore',
					link: 'https://github.com/explore',
				},
			],
		},
	],
};
