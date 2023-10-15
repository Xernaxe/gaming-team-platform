const tags = [
	{ title: 'New', value: 'new' },
	{ title: 'Popular', value: 'popular' },
	{ title: 'Trending', value: 'trending' },
];

const news = {
	name: 'news',
	title: 'News',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			title: 'Tag',
			type: 'string',
			name: 'tag',
			options: {
				list: tags.map(({ title, value }) => ({ title, value })),
				layout: 'radio',
			},
		},
		{
			name: 'overview',
			type: 'string',
			title: 'News overview',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'link',
			type: 'string',
			title: 'Link',
		},
	],
};
export default news