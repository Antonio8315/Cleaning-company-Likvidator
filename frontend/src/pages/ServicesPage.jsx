import { Header } from "../sections/Header.jsx";
import { ServicesHero } from "../sections/ServicesHero.jsx";
import { Services } from '../sections/Services.jsx';
import { Footer } from '../sections/Footer.jsx';

export function ServicesPage() {
    return (
        <>
            <Header />
            <ServicesHero />
            <Services />
            <Footer />
        </>
    );
}