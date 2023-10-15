import { INewsItems } from '@/app/_types/INewsItems';
import { createClient, groq } from 'next-sanity';
import config from './config/client-config';


export async function getAllNews(): Promise<INewsItems[]> {
	return createClient(config).fetch(groq`*[_type=="news"] {
            _createdAt,
            _id,
            tag,
            title,
            overview,
            "slug": slug.current,
            "imageUrl": image.asset->url
        }`);
}

export async function getNews(number: number): Promise<INewsItems[]> {
	return createClient(config).fetch(groq`*[_type=="news"] | order(_createdAt asc)[0...${number}] {
            _createdAt,
            _id,
            tag,
            title,
            overview,
            "slug": slug.current,
            "imageUrl": image.asset->url
    }
    `);
}

export async function getNewsBySlug(slug: string): Promise<INewsItems> {
	return createClient(config).fetch(
		groq`*[_type == "news" && slug.current == $slug][0] {
            _createdAt,
            _id,
            tag,
            title,
            overview,
            "slug": slug.current,
            "imageUrl": image.asset->url
    }`,
		{ slug }
	);
}
