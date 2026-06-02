import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';

const sectors = [
  'Media',
  'Construction',
  'Food & Beverage',
  'Healthcare',
  'Information Technology',
  'Distribution',
  'Renewable Energy',
  'Real Estate',
];

const intentPoints = [
  'Develop a strong multi-sector brand identity.',
  'Create sustainable growth through diversification.',
  'Build trust through professional positioning.',
  'Expand into high-potential industries with strategic focus.',
];

export default function About() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow="About Us"
          title="A professional business group built for long-term growth"
          accentText="long-term growth"
          subtitle="Pioneer Ventures Group represents a vision-driven business identity designed to grow across multiple industries through trust, planning, and strategic execution."
          primaryCta={{ label: 'Contact Us', path: '/contact' }}
          secondaryCta={{ label: 'View Portfolio', path: '/services' }}
          stats={[
            { value: '8+', label: 'Core Sectors' },
            { value: 'Growth-Led', label: 'Business Direction' },
            { value: 'Professional', label: 'Brand Positioning' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
            alt: 'Professional business team planning long-term growth strategy',
          }}
        />

        <SectionWrapper
          eyebrow="Who We Are"
          title="Building a strong foundation for business expansion and credibility"
          description="Pioneer Ventures Group is envisioned as a diversified corporate platform focused on professional growth, sector expansion, and long-term business value."
        >
          <div className="split-section">
            <div className="content-stack">
              <p>
                Our aim is to create a business identity that reflects trust,
                structure, and long-range strategic thinking. Every initiative
                under the group is intended to contribute to a larger vision of
                stable and meaningful growth.
              </p>

              <p>
                We believe in building a modern business ecosystem where each
                vertical contributes to a broader framework of opportunity,
                resilience, and future readiness.
              </p>

              <ul>
                <li>Professional positioning with long-term business intent.</li>
                <li>Focused sector expansion supported by strategic clarity.</li>
                <li>Brand-led growth built on trust and execution.</li>
              </ul>
            </div>

            <div className="info-panel">
              <span className="eyebrow">Core Business Intent</span>
              <div className="grid-1 mt-24">
                {intentPoints.map((item) => (
                  <div key={item} className="card">
                    <p className="mb-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Sectors We Focus On</span>
              <h2>A diversified structure designed for balanced expansion</h2>
              <p>
                Our business outlook spans multiple sectors so the group can
                build resilience, widen opportunity, and support long-term brand value.
              </p>
            </div>

            <div className="grid-4">
              {sectors.map((sector) => (
                <article key={sector} className="card">
                  <h3>{sector}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="image-card image-card-horizontal">
              <div className="image-card-media">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration in a professional office environment"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>

              <div className="image-card-body image-card-body-fill">
                <span className="eyebrow">Our Philosophy</span>
                <h2>Growth becomes stronger when structure and intent move together</h2>
                <p>
                  We are building Pioneer Ventures as a group identity that can
                  support diversified businesses without losing strategic focus.
                </p>
                <p>
                  This means aligning every sector with quality standards,
                  credible positioning, and a long-term outlook rather than
                  short-lived momentum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Connect With Us"
          title="Want to know more about Pioneer Ventures Group?"
          description="Reach out to learn more about our business direction, operating philosophy, and long-term vision across sectors."
          primary={{ label: 'Contact Us', path: '/contact' }}
          secondary={{ label: 'Explore Portfolio', path: '/services' }}
        />
      </main>

      <Footer />
    </div>
  );
}