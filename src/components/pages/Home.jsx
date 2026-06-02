import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Hero from '../components/sections/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import BrandIntro from '../components/sections/BrandIntro';
import AboutPreview from '../components/sections/AboutPreview';
import PortfolioShowcase from '../components/sections/PortfolioShowcase';
import ValueArchitecture from '../components/sections/ValueArchitecture';
import IndustryHighlights from '../components/sections/IndustryHighlights';
import HomeCTA from '../components/sections/HomeCTA';

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <Hero />
        <TrustStrip />
        <BrandIntro />
        <AboutPreview />
        <PortfolioShowcase />
        <ValueArchitecture />
        <IndustryHighlights />
        <HomeCTA />
      </main>

      <Footer />
    </div>
  );
}