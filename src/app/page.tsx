import { AboutUs } from './components/AboutUs/AboutUs';
import { Hero } from './components/Hero/Hero';
import { LatestNews } from './components/LatestNews/LatestNews';
import { OurShop } from './components/OurShop/OurShop';
import { TournamentBanner } from './components/Banner/TournamentBanner';
import { Tournaments } from './components/Tournaments/Tournaments';

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
