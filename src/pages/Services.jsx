import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';
import softwareImg from '../assets/software.jpg'

const portfolioItems = [
  {
    title: 'Media',
    description:
      'Our media vertical is focused on high-impact storytelling, modern communication formats, and scalable content ecosystems built for evolving audiences.',
    imageUrl:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Construction',
    description:
      'Our construction vertical is dedicated to building with precision, innovation, and execution standards that support durable long-term growth.',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Food & Beverages',
    description:
      'This vertical delivers high-quality products and memorable consumer experiences with a focus on operational consistency and brand value.',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Healthcare',
    description:
      'Our healthcare vertical promotes wellness-led solutions inspired by trusted systems of care and a long-view commitment to better living.',
    imageUrl:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Software Development & IT Services',
    description:
      'Software services and digital solutions designed to support modern business growth and efficiency.',
    imageUrl: softwareImg,
      //'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Media Distribution',
    description:
      'This business line focuses on efficient content delivery, audience reach, and distribution networks designed for quality and scale.',
    imageUrl:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Renewable Energy',
    description:
      'Our renewable energy vertical invests in sustainable solutions and cleaner operational models aligned with future-ready infrastructure.',
    imageUrl:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Real Estate',
    description:
      'The real estate vertical is committed to transforming land and built environments into purposeful, high-value community spaces.',
    imageUrl:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Services() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow="Our Portfolio"
          title="A diversified presence across multiple industries"
          accentText="multiple industries"
          subtitle="Each vertical under Pioneer Ventures Group represents a focused business direction, built around innovation, reliability, and sector-specific opportunity."
          primaryCta={{ label: 'Contact Us', path: '/contact' }}
          secondaryCta={{ label: 'About Us', path: '/about' }}
          stats={[
            { value: '8+', label: 'Active Verticals' },
            { value: 'Multi-Sector', label: 'Business Presence' },
            { value: 'Future-Focused', label: 'Growth Strategy' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
            alt: 'Modern business portfolio and diversified sectors',
          }}
        />

        <SectionWrapper
          eyebrow="Business Sectors"
          title="Our portfolio reflects range, resilience, and long-term vision"
          description="Pioneer Ventures brings together multiple industry verticals under one growth-focused umbrella, allowing each business to evolve with clarity, strength, and strategic direction."
        >
          <div className="grid-2">
            {portfolioItems.map((item) => (
              <article key={item.title} className="image-overlay-card image-overlay-card-md">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  width="1200"
                  height="800"
                />
                <div className="image-overlay-content">
                  <span className="eyebrow badge-tight">Portfolio Vertical</span>
                  <h3 className="mt-16 mb-10">{item.title}</h3>
                  <p className="mb-0 max-w-34ch">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Approach</span>
              <h2>Why our multi-sector model creates lasting value</h2>
              <p>
                A diversified group structure gives us the ability to balance creativity,
                infrastructure, innovation, and market relevance across multiple business environments.
              </p>
            </div>

            <div className="grid-3">
              <article className="card">
                <div className="icon-badge">01</div>
                <h3>Sector diversity</h3>
                <p>
                  Our portfolio spans complementary sectors, helping the group remain adaptive,
                  resilient, and opportunity-driven.
                </p>
              </article>

              <article className="card">
                <div className="icon-badge">02</div>
                <h3>Focused execution</h3>
                <p>
                  Every vertical operates with its own direction while benefiting from broader
                  group-level thinking and support.
                </p>
              </article>

              <article className="card">
                <div className="icon-badge">03</div>
                <h3>Long-term outlook</h3>
                <p>
                  We prioritize sustainable growth, strong fundamentals, and meaningful business
                  positioning over short-term movement.
                </p>
              </article>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Start a Conversation"
          title="Interested in our portfolio or business verticals?"
          description="Connect with Pioneer Ventures to learn more about our sectors, collaboration opportunities, and business direction."
          primary={{ label: 'Contact Us', path: '/contact' }}
          secondary={{ label: 'About the Group', path: '/about' }}
        />
      </main>

      <Footer />
    </div>
  );
}