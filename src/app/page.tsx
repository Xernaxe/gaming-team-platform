import { AboutUs } from './homePage/AboutUs';
import { Hero } from './homePage/Hero';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Hero />
			<AboutUs />
		</main>
	);
}
