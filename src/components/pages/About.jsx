import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';
import { siteContent } from '../data/siteContent';

const milestones = [
  {
    year: 'Foundation',
    title: 'Beginning with a diversified vision',
    description:
      'Pioneer Ventures was shaped around the idea of creating a business platform that could grow across industries while maintaining one consistent identity rooted in trust, quality, and future readiness.',
  },
  {
    year: 'Expansion',
    title: 'Building sector-wide presence',
    description:
      'As the group evolved, it developed a broader presence across media, construction, food and beverages, healthcare, information technology, media distribution, renewable energy, and real estate.',
  },
  {
    year: 'Refinement',
    title: 'Strengthening philosophy and execution',
    description:
      'Our journey has been defined not only by expansion, but also by a deeper focus on business discipline, responsible growth, and a long-term value mindset across every vertical.',
  },
  {
    year: 'Forward Focus',
    title: 'Preparing for the next phase of growth',
    description:
      'Today, Pioneer Ventures continues to look ahead with a commitment to innovation, strategic collaboration, operational excellence, and sustainable opportunity creation.',
  },
];

const valueBlocks = [
  {
    title: 'Integrity in action',
    text: 'We value ethical conduct, transparency, and accountability in the way we build relationships, evaluate opportunities, and conduct business across every sector.',
  },
  {
    title: 'Innovation with purpose',
    text: 'We do not pursue innovation for appearance alone. We pursue it where it can create measurable progress, sharper execution, and meaningful long-term relevance.',
  },
  {
    title: 'Quality without compromise',
    text: 'We believe that strong businesses are built on consistent standards, disciplined execution, and a commitment to refinement in every business touchpoint.',
  },
  {
    title: 'Growth with responsibility',
    text: 'Our long-term approach balances ambition with responsibility, ensuring that expansion is thoughtful, sustainable, and aligned with trust.',
  },
];

export default function About() {
  const { aboutPage, businessVerticals } = siteContent;

  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow={aboutPage.hero.eyebrow}
          title={aboutPage.hero.title}
          subtitle={aboutPage.hero.subtitle}
          primaryCta={{ label: 'Explore Portfolio', path: '/services' }}
          secondaryCta={{ label: 'Contact Us', path: '/contact' }}
          stats={[
            { value: '8+', label: 'Business Verticals' },
            { value: 'Future-Focused', label: 'Growth Mindset' },
            { value: 'Trust-Led', label: 'Business Philosophy' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
            alt: 'Corporate professionals discussing strategy in a modern office',
          }}
        />

        <SectionWrapper
          eyebrow="Who We Are"
          title={aboutPage.whoWeAre.title}
          description="A professional business group built to create long-term value across diverse sectors."
        >
          <div className="split-section">
            <div className="content-stack">
              {aboutPage.whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="info-panel" style={{ marginTop: '10px' }}>
                <ul className="info-list">
                  <li>
                    <span>Business Identity</span>
                    <strong>Diversified Group Structure</strong>
                  </li>
                  <li>
                    <span>Core Orientation</span>
                    <strong>Innovation, Quality, Responsibility</strong>
                  </li>
                  <li>
                    <span>Operating Outlook</span>
                    <strong>Strategic, Long-Term, Opportunity-Led</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="image-overlay-card">
              <img
                src={aboutPage.whoWeAre.image.src}
                alt={aboutPage.whoWeAre.image.alt}
              />
              <div className="image-overlay-content">
                <h3>One group, multiple industries, shared purpose</h3>
                <p>
                  Our identity is shaped by strategic thinking, responsible
                  expansion, and a commitment to building enduring value.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Our Philosophy"
          title="A business philosophy built on credibility, resilience, and long-term thinking"
          description="We bring together ambition and discipline so that growth remains meaningful, scalable, and grounded in trust."
          alt
        >
          <div className="grid-2">
            <article className="card">
              <h3>Mission</h3>
              <p style={{ marginTop: '12px' }}>
                To build and support businesses across multiple sectors through
                innovation, integrity, and quality-led execution that creates
                sustainable long-term value.
              </p>
            </article>

            <article className="card">
              <h3>Vision</h3>
              <p style={{ marginTop: '12px' }}>
                To shape a future-focused business group recognized for strategic
                diversification, trusted relationships, and meaningful impact
                across industries.
              </p>
            </article>
          </div>

          <div className="split-section" style={{ marginTop: '32px' }}>
            <div className="content-stack">
              {aboutPage.philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="info-panel">
              <h3 style={{ marginBottom: '18px' }}>Our approach</h3>
              <ul className="info-list">
                <li>
                  <span>Cross-sector thinking</span>
                  <strong>Shared intelligence across industries</strong>
                </li>
                <li>
                  <span>Operational discipline</span>
                  <strong>Execution guided by consistency and clarity</strong>
                </li>
                <li>
                  <span>Relationship-first growth</span>
                  <strong>Partnerships built on confidence and trust</strong>
                </li>
                <li>
                  <span>Future relevance</span>
                  <strong>Business choices aligned with evolving opportunity</strong>
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Core Values"
          title="The values that define how Pioneer Ventures operates"
          description="Our principles are not decorative statements; they guide the way we think, collaborate, and build."
          center
        >
          <div className="grid-2">
            {valueBlocks.map((item, index) => (
              <article className="card" key={item.title}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.text}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Our Journey"
          title="A measured path of growth and business evolution"
          description="Our story is defined by purposeful expansion, strategic refinement, and a continued commitment to quality-led progress."
          alt
        >
          <div className="grid-2">
            {milestones.map((item) => (
              <article className="card" key={item.title}>
                <span className="eyebrow" style={{ marginBottom: '18px' }}>
                  {item.year}
                </span>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow={aboutPage.sectorsTitle}
          title="A portfolio shaped by breadth, relevance, and opportunity"
          description={aboutPage.sectorsSubtitle}
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
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Business Impact"
          title="What our identity stands for"
          description="Pioneer Ventures is positioned to support growth not only through diversification, but through a disciplined and professional operating mindset."
          alt
          center
        >
          <div className="stats-grid">
            <article className="stat-card">
              <strong>8+</strong>
              <p>Core business sectors represented across the group portfolio.</p>
            </article>

            <article className="stat-card">
              <strong>Trust-Led</strong>
              <p>Professional relationships built around credibility and consistency.</p>
            </article>

            <article className="stat-card">
              <strong>Quality-Driven</strong>
              <p>Execution standards focused on refinement, care, and discipline.</p>
            </article>

            <article className="stat-card">
              <strong>Future-Ready</strong>
              <p>Growth direction aligned with innovation and long-term relevance.</p>
            </article>
          </div>
        </SectionWrapper>

        <CTASection
          eyebrow="Let’s Connect"
          title="Build the next chapter of growth with Pioneer Ventures"
          description="Whether you are exploring partnership opportunities, business discussions, or simply want to know more about our group, we welcome the conversation."
          primary={{ label: 'Contact Us', path: '/contact' }}
          secondary={{ label: 'View Careers', path: '/careers' }}
        />
      </main>

      <Footer />
    </div>
  );
}