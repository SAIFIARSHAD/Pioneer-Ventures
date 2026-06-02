import { siteContent } from '../../data/siteContent';
import PageHero from '../ui/PageHero';

export default function Hero() {
  return (
    <PageHero
      eyebrow={siteContent.home.hero.eyebrow}
      title={siteContent.home.hero.title}
      subtitle={siteContent.home.hero.subtitle}
      primaryCta={siteContent.home.hero.ctaPrimary}
      secondaryCta={siteContent.home.hero.ctaSecondary}
      stats={siteContent.home.hero.stats}
      image={siteContent.home.hero.image}
    />
  );
}