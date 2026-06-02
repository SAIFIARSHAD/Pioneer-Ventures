import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';
import { siteContent } from '../data/siteContent';

const galleryItems = [
  {
    id: 1,
    category: 'Media',
    title: 'Broadcast & Content Creation',
    caption: 'Professional media environments built for storytelling and reach.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/MDR_Kripo_live.jpg/1280px-MDR_Kripo_live.jpg',
    size: 'large',
  },
  {
    id: 2,
    category: 'Construction',
    title: 'Infrastructure Development',
    caption: 'Building quality structures with precision and long-term planning.',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 3,
    category: 'Food & Beverages',
    title: 'Premium Dining Experiences',
    caption: 'Quality-led food and beverage concepts crafted with care.',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 4,
    category: 'Healthcare',
    title: 'Wellness & Care Solutions',
    caption: 'Committed to improving lives through responsible care and trust.',
    imageUrl:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
  {
    id: 5,
    category: 'Information Technology',
    title: 'Digital Innovation',
    caption: 'Technology-led solutions that enable modern business transformation.',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 6,
    category: 'Renewable Energy',
    title: 'Sustainable Energy Future',
    caption: 'Investing in responsible energy aligned with long-term sustainability.',
    imageUrl:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
  {
    id: 7,
    category: 'Real Estate',
    title: 'Premium Property Development',
    caption: 'Creating spaces that combine utility, value, and community relevance.',
    imageUrl:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 8,
    category: 'Media Distribution',
    title: 'Content Access & Networks',
    caption: 'Connecting content with audiences through structured distribution.',
    imageUrl:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 9,
    category: 'Construction',
    title: 'Modern Architecture',
    caption: 'Shaping skylines through thoughtful design and disciplined execution.',
    imageUrl:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
  {
    id: 10,
    category: 'Food & Beverages',
    title: 'Culinary Craft',
    caption: 'Memorable consumer experiences built on quality and consistency.',
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 11,
    category: 'Information Technology',
    title: 'Future-Ready Technology',
    caption: 'Building digital capability that supports operational evolution.',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    size: 'small',
  },
  {
    id: 12,
    category: 'Real Estate',
    title: 'Urban Development',
    caption: 'Purposeful development that drives lasting community and commercial value.',
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
];

const categories = [
  'All',
  'Media',
  'Construction',
  'Food & Beverages',
  'Healthcare',
  'Information Technology',
  'Renewable Energy',
  'Real Estate',
  'Media Distribution',
];

export default function Gallery() {
  const { galleryPage } = siteContent;
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <section className="page-hero">
          <div className="container">
            <div
              style={{
                maxWidth: '760px',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <span className="eyebrow">{galleryPage.hero.eyebrow}</span>
              <h1 style={{ margin: '20px 0 18px' }}>{galleryPage.hero.title}</h1>
              <p style={{ fontSize: '1.08rem' }}>{galleryPage.hero.subtitle}</p>
            </div>
          </div>
        </section>

        <SectionWrapper>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '42px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ minHeight: '40px', padding: '0 18px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item) => (
              <article key={item.id} className="gallery-item">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    minHeight: item.size === 'large' ? '300px' : '220px',
                  }}
                />
                <div className="gallery-caption">
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: 'rgba(215,38,56,0.85)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      marginBottom: '8px',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.88rem' }}>
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '80px 0',
                color: 'var(--color-text-muted)',
              }}
            >
              <p>No gallery items found for this category.</p>
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Business Sectors"
          title="Every image reflects a part of our business identity"
          description="Our gallery represents the industries, environments, and directions that shape the Pioneer Ventures portfolio."
          alt
          center
        >
          <div className="grid-4">
            {siteContent.businessVerticals.map((sector) => (
              <article
                key={sector.slug}
                className="image-overlay-card"
                style={{ minHeight: '260px' }}
              >
                <img
                  src={sector.imageUrl}
                  alt={sector.title}
                  loading="lazy"
                  style={{ minHeight: '260px' }}
                />
                <div className="image-overlay-content">
                  <h3 style={{ fontSize: '1rem' }}>{sector.title}</h3>
                  <p style={{ fontSize: '0.85rem' }}>{sector.shortDescription}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <CTASection
          eyebrow="Learn More"
          title="Interested in our sectors and business portfolio?"
          description="Explore our full portfolio page or reach out to us directly to learn more about Pioneer Ventures."
          primary={{ label: 'View Portfolio', path: '/services' }}
          secondary={{ label: 'Contact Us', path: '/contact' }}
        />
      </main>

      <Footer />
    </div>
  );
}