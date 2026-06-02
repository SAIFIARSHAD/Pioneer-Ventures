import CTASection from '../ui/CTASection';
import { siteContent } from '../../data/siteContent';

export default function HomeCTA() {
  return (
    <CTASection
      eyebrow={siteContent.home.cta.eyebrow}
      title={siteContent.home.cta.title}
      description={siteContent.home.cta.description}
      primary={siteContent.home.cta.primary}
      secondary={{ label: 'Explore Careers', path: '/careers' }}
    />
  );
}