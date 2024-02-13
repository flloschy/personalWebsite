export function load() {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true }) as {
		[key: string]: {
			metadata: {
				title: string;
				description: string;
				date: string;
				categories: string[];
			};
		};
	};
	const n: {
		key: string;
		title: string;
		description: string;
		date: Date;
		categories: string[];
	}[] = [];
	Object.keys(paths).forEach((key) => {
		const post = paths[key].metadata;
		n.push({
			key: key.split('/').at(-1)?.replace('.md', '') as string,
			title: post.title,
			description: post.description,
			date: new Date(post.date),
			categories: post.categories
		});
	});

	return { n: n.sort((a, b) => b.date.getTime() - a.date.getTime()) };
}
