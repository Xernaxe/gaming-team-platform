import { INewsItems } from '@/app/_types/INewsItems';
import { SubpagesWrapper } from '@/app/components/_globals/SubpagesWrapper';
import { getNewsBySlug } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PostMetaData } from './components/PostMetaData';
import { ShareItem } from '@/app/components/_globals/ShareItem/ShareItem';
import { RelatedTags } from '@/app/components/_globals/RelatedTags/RelatedTags';
import { SimilarArticles } from '@/app/components/_globals/SimilarArticles/SimilarArticles';
import { TournamentCardDetails } from '@/app/components/_globals/Card/TournamentCardDetails';
import { InnerPageAside } from './components/Aside/InnerPageAside';
type Props = {
	params: { post: string };
};

export default async function Page({ params }: Props) {
	const slug = params.post;
	const newsItem: INewsItems = await getNewsBySlug(slug);
	console.log(newsItem);

	return (
		<section className='my-10 flex gap-[30px]'>
			<section>
				<div className='relative w-screen h-[clamp(157.50px,45vw,300px)] mobile:w-full desktop:max-w-[770px] desktop:max-h-[443px] desktopL:h-[443px] desktopL:w-[770px]'>
					<Image
						src={newsItem.imageUrl}
						alt=''
						fill={true}
						className='object-cover mobile:rounded-t-[0.63rem] '
					/>
				</div>
				<SubpagesWrapper>
					<div className=''>
						<h1 className=' font-oxanium font-bold text-lg'>
							{newsItem.title}
						</h1>
						<PostMetaData />
					</div>

					<p className='leading-[1.5625rem]'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo amet set for your cool happiness for lyour
						loyal city.
					</p>

					<ShareItem />

					<p className='leading-[1.5625rem]'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deser unt mollit anim id est laborum. Sed ut
						perspiciatis unde omnis iste natus error sit voluptatem accusant ium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
						inventore veritatis et quasi architecto beatae vitae dicta sunt
						explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna tur
						aut odit aut fugit, sed quia consequuntur magni dolores eos qui
						ratione voluptatem sequi nesciunt. Neque porro quisq.
					</p>

					<div>
						<div className='relative w-full h-[clamp(157.50px,45vw,300px)] mb-[0.5vw] tablet:w-1/2 tablet:h-[clamp(157.50px,25vw,200px)] tablet:float-left tablet:mr-[1.2vw]'>
							<Image src={newsItem.imageUrl} alt={newsItem.title} fill />
						</div>
						<p className='leading-[1.5625rem]'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit lorem ipsum dolor sit amet, consectetur adipisicing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum
						</p>
					</div>

					<RelatedTags />
					<SimilarArticles />
				</SubpagesWrapper>
			</section>


		<InnerPageAside/>

		</section>
	);
}
