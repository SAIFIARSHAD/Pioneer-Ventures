import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';
import { siteContent } from '../data/siteContent';

const capabilityBlocks = [
  {
    title: 'Diversified opportunity mapping',
    description:
      'We identify and support business sectors that align with long-term relevance, market potential, and strategic value creation.',
  },
  {
    title: 'Cross-sector operating mindset',
    description:
      'Our portfolio is built with the advantage of shared business intelligence, allowing learnings and strengths to inform multiple verticals.',
  },
  {
    title: 'Brand-led strategic consistency',
    description:
      'Although each vertical has its own operating context, every business reflects the larger Pioneer Ventures identity of quality, trust, and forward movement.',
  },
  {
    title: 'Execution with long-term intent',
    description:
      'We focus on building sectors that are not only commercially meaningful today, but also positioned for resilience and relevance over time.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Identify',
    text: 'We evaluate sectors through the lens of opportunity, future relevance, strategic fit, and long-term business potential.',
  },
  {
    step: '02',
    title: 'Position',
    text: 'We shape each vertical with a clear value orientation, ensuring it aligns with market logic, quality standards, and brand discipline.',
  },
  {
    step: '03',
    title: 'Strengthen',
    text: 'We focus on operational refinement, responsible scale, and systems that support durability instead of short-term momentum alone.',
  },
  {
    step: '04',
    title: 'Evolve',
    text: 'We remain responsive to change, enabling our businesses to adapt, innovate, and remain competitive in evolving environments.',
  },
];

export default function Services() {
  const { servicesPage, businessVerticals } = siteContent;
  const featuredSectors = businessVerticals.slice(0, 3);

  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow={servicesPage.hero.eyebrow}
          title={servicesPage.hero.title}
          subtitle={servicesPage.hero.subtitle}
          primaryCta={{ label: 'Contact Us', path: '/contact' }}
          secondaryCta={{ label: 'About Us', path: '/about' }}
          stats={[
            { value: '8+', label: 'Industry Verticals' },
            { value: 'Growth-Led', label: 'Portfolio Direction' },
            { value: 'Future-Ready', label: 'Business Outlook' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
            alt: 'Professional business workspace representing a diversified corporate portfolio',
          }}
        />

        <SectionWrapper
          eyebrow="Portfolio Overview"
          title="A business portfolio shaped by opportunity, discipline, and long-term relevance"
          description="Pioneer Ventures operates across multiple sectors with a focus on building meaningful business presence, scalable value, and future-ready capability."
        >
          <div className="split-section">
            <div className="content-stack">
              <p>
                Our portfolio represents a diversified business model designed to
                capture opportunity across industries that influence growth,
                infrastructure, consumer experience, technology, and sustainable
                development.
              </p>
              <p>
                Rather than treating diversification as simple expansion, we view
                it as a strategic model where each vertical contributes to a
                broader ecosystem of business resilience, adaptability, and
                long-term value creation.
              </p>
              <p>
                This structure allows Pioneer Ventures to remain responsive to
                evolving markets while maintaining a consistent identity built on
                quality, responsibility, and business discipline.
              </p>
            </div>

            <div className="info-panel">
              <h3 style={{ marginBottom: '18px' }}>Portfolio characteristics</h3>
              <ul className="info-list">
                <li>
                  <span>Business model</span>
                  <strong>Diversified multi-sector portfolio</strong>
                </li>
                <li>
                  <span>Core philosophy</span>
                  <strong>Innovation, value, and responsible growth</strong>
                </li>
                <li>
                  <span>Operating focus</span>
                  <strong>Quality-led and future-oriented</strong>
                </li>
                <li>
                  <span>Strategic intent</span>
                  <strong>Build resilient long-term business relevance</strong>
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Featured Sectors"
          title="Leading sectors within the Pioneer Ventures portfolio"
          description="These selected verticals represent the strength, range, and strategic orientation of our business ecosystem."
          alt
        >
          <div className="grid-1" style={{ display: 'grid', gap: '28px' }}>
            {featuredSectors.map((sector, index) => (
              <article
                key={sector.slug}
                className="image-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1.05fr 0.95fr' : '0.95fr 1.05fr',
                  alignItems: 'stretch',
                }}
              >
                <div className="image-card-media" style={{ aspectRatio: 'auto', minHeight: '100%' }}>
                  <img src={sector.imageUrl} alt={sector.title} />
                </div>

                <div
                  className="image-card-body"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '36px',
                  }}
                >
                  <span className="eyebrow" style={{ marginBottom: '16px' }}>
                    {sector.title}
                  </span>
                  <h3>{sector.title}</h3>
                  <p style={{ marginTop: '14px' }}>{sector.fullDescription}</p>
                  <p style={{ marginTop: '14px' }}>
                    This vertical reflects our commitment to combining strategic
                    positioning with quality execution, allowing us to participate
                    in sectors that offer both immediate relevance and long-term
                    opportunity.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Complete Sector Portfolio"
          title="The full range of industries we operate across"
          description="Each vertical contributes to a broader business identity grounded in growth, quality, and opportunity."
        >
          <div className="grid-4">
            {businessVerticals.map((sector) => (
              <article className="image-card" key={sector.slug}>
                <div className="image-card-media">
                  <img src={sector.imageUrl} alt={sector.title} />
                </div>

                <div className="image-card-body">
                  <h3>{sector.title}</h3>
                  <p style={{ marginTop: '10px' }}>{sector.shortDescription}</p>
                  <p style={{ marginTop: '12px' }}>
                    Built with a focus on relevance, consistency, and long-term
                    value creation.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Capability Framework"
          title="What makes our portfolio approach distinctive"
          description="Our business framework is built to support diversification with strategic clarity rather than fragmentation."
          alt
          center
        >
          <div className="grid-2">
            {capabilityBlocks.map((item, index) => (
              <article className="card" key={item.title}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="How We Build"
          title="Our working model across industries"
          description="We approach portfolio development through a structured process designed to support clarity, focus, and sustainable growth."
        >
          <div className="grid-4">
            {processSteps.map((item) => (
              <article className="card" key={item.step}>
                <div className="icon-badge">{item.step}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.text}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Portfolio Strength"
          title="A group identity designed for breadth and depth"
          description="Our portfolio is not only broad in sector presence, but also structured around professional consistency and long-term strategic intent."
          alt
          center
        >
          <div className="stats-grid">
            <article className="stat-card">
              <strong>8+</strong>
              <p>Business sectors contributing to a diversified group portfolio.</p>
            </article>
            <article className="stat-card">
              <strong>Multi-Industry</strong>
              <p>A broad operating presence across distinct but relevant markets.</p>
            </article>
            <article className="stat-card">
              <strong>Quality-Led</strong>
              <p>Business thinking shaped by discipline, standards, and execution.</p>
            </article>
            <article className="stat-card">
              <strong>Opportunity-Focused</strong>
              <p>Portfolio choices aligned with future relevance and scalable value.</p>
            </article>
          </div>
        </SectionWrapper>

        <CTASection
          eyebrow="Start a Conversation"
          title="Explore partnerships and business opportunities with Pioneer Ventures"
          description="If you are interested in our sectors, business direction, or collaborative opportunities, our team would be pleased to connect."
          primary={{ label: 'Contact Us', path: '/contact' }}
          secondary={{ label: 'View Careers', path: '/careers' }}
        />
      </main>

      <Footer />
    </div>
  );
}