import SectionWrapper from '../ui/SectionWrapper';
import { siteContent } from '../../data/siteContent';

export default function BrandIntro() {
  return (
    <SectionWrapper
      eyebrow="Group Overview"
      title={siteContent.home.intro.title}
      description={siteContent.home.intro.description}
      center
      compact
    >
      <div
        className="info-panel"
        style={{
          background:
            'linear-gradient(135deg, rgba(11,59,143,0.04), rgba(255,255,255,0.95), rgba(215,38,56,0.04))',
        }}
      >
        <div className="grid-3">
          <div className="content-stack">
            <h3>Multi-sector vision</h3>
            <p>
              We build across industries with one shared focus: meaningful growth
              backed by strategic direction and operational discipline.
            </p>
          </div>

          <div className="content-stack">
            <h3>Long-term value</h3>
            <p>
              Our portfolio philosophy is not built around short-term activity,
              but around creating relevance, resilience, and scalable business
              outcomes.
            </p>
          </div>

          <div className="content-stack">
            <h3>Brand-led presence</h3>
            <p>
              Every business vertical reflects the larger identity of Pioneer
              Ventures through quality, trust, and future-facing intent.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}