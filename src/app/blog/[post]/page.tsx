import { INewsItems } from '@/app/_types/INewsItems';
import { getNewsBySlug } from '@/sanity/sanity-utils';


type Props = {
	params: { post: string };
};

export default async function Page({ params }: Props) {
	const slug = params.post;
	const newsItem: INewsItems = await getNewsBySlug(slug);
	console.log(newsItem);

	return (
		<>
			<h2>Hello {newsItem.title}</h2>
			<div>My Post: {newsItem.tag}</div>
		</>
	);
}
