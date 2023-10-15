import { getNews } from '@/sanity/sanity-utils';
import { BlogContainer } from './components/BlogContainer/BlogContainer';
import { INewsItems } from '../_types/INewsItems';



export default async function Home() {

	const newsItems: INewsItems[] = await getNews();
	return (
		<>
			<BlogContainer newsItems={newsItems} />
		</>
	);
}
