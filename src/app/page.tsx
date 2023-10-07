import { AboutUs } from './homePage/AboutUs';
import { Hero } from './homePage/Hero';
import { LatestNews } from './homePage/LatestNews';
import { OurShop } from './homePage/OurShop';
import { TournamentBanner } from './homePage/TournamentBanner';
import { Tournaments } from './homePage/Tournaments';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<Tournaments />
			<OurShop />
			<LatestNews />
			<TournamentBanner />
		</>
	);
}
