import { AboutUs } from './components/AboutUs/AboutUs';
import { Hero } from './components/Hero/Hero';
import { LatestNews } from './components/LatestNews/LatestNews';
import { OurShop } from './components/OurShop/OurShop';
import { Tournaments } from './components/Tournaments/Tournaments';
import { Contact } from './components/Contact/Contact';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<Tournaments />
			<Contact />
			<OurShop />
			<LatestNews />
		</>
	);
}
