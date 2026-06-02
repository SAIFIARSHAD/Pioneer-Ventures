import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';
import mediaImg from '../assets/media.jpg';
import media1Img from '../assets/media1.jpg';
import helthcareImg from '../assets/helthcare.jpg'
import softwareImg from '../assets/software.jpg'

const galleryItems = [
  {
    id: 1,
    category: 'News Media',
    title: 'Broadcast News Studio',
    caption:
      'News channel operations built around editorial credibility, fast communication, and audience trust.',
    imageUrl: mediaImg,
      //imageUrl:
     // 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    size: 'large',
  },
  {
    id: 2,
    category: 'Construction',
    title: 'Landmark Infrastructure',
    caption:
      'Large-scale construction planning shaped by execution quality and long-term utility.',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
  },
  {
    id: 3,
    category: 'Food & Beverage',
    title: 'Premium Dining Experience',
    caption:
      'Consumer-facing hospitality and product experiences designed around quality and presentation.',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
  },
  {
    id: 4,
    category: 'Healthcare',
    title: 'Wellness-Centered Facilities',
    caption:
      'Health-focused environments that reflect care, trust, and service continuity.',
    imageUrl: helthcareImg,
     // 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    size: 'large',
  },
  {
    id: 5,
    category: 'Software & IT Services',
    title: 'Software Development Environment',
    caption:
      'Software services and digital solutions designed to support modern business growth and efficiency.',
    imageUrl: softwareImg,
      //'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
  },
  {
    id: 6,
    category: 'Renewable Energy',
    title: 'Clean Energy Direction',
    caption:
      'Future-facing energy initiatives aligned with sustainable growth and responsible operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
  },
  {
    id: 7,
    category: 'Real Estate',
    title: 'Community-Led Development',
    caption:
      'Built environments planned to create long-term value and stronger communities.',
    imageUrl:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    size: 'large',
  },
  {
    id: 8,
    category: 'Media Distribution',
    title: 'Content Delivery Networks',
    caption:
      'Structured media distribution focused on reach, speed, and operational consistency.',
    imageUrl:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
  },
  {
    id: 9,
    category: 'News Media',
    title: 'Editorial Production Desk',
    caption:
      'Editorial and newsroom workflows aligned with high-volume news and broadcast operations.',
    imageUrl: media1Img,
     // 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
  },
];

const categories = [
  'All',
  'News Media',
  'Construction',
  'Food & Beverage',
  'Healthcare',
  'Software & IT Services',
  'Renewable Energy',
  'Real Estate',
  'Media Distribution',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow="Gallery"
          title="A visual window into our sectors and business direction"
          accentText="business direction"
          subtitle="Explore a curated visual collection representing Pioneer Ventures Group, including news media, software services, infrastructure, healthcare, and other growth-focused sectors."
          primaryCta={{ label: 'Contact Us', path: '/contact' }}
          secondaryCta={{ label: 'View Portfolio', path: '/services' }}
          stats={[
            { value: 'Multi-Sector', label: 'Visual Identity' },
            { value: 'News Media', label: 'Editorial Presence' },
            { value: 'Software-Led', label: 'Digital Capability' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Newsroom and editorial production environment',
          }}
        />

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Visual Categories</span>
              <h2>Explore our sectors through a cleaner, tighter gallery</h2>
              <p>
                Use the category filters to browse visuals connected to specific
                business segments within Pioneer Ventures Group.
              </p>
            </div>

            <div className="gallery-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`btn gallery-filter-btn ${
                    activeCategory === category ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredItems.length > 0 ? (
              <div className="gallery-grid">
                {filteredItems.map((item) => (
                  <article key={item.id} className="gallery-item">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      width="1200"
                      height="900"
                      className={`gallery-image ${
                        item.size === 'large'
                          ? 'gallery-image-large'
                          : 'gallery-image-small'
                      }`}
                    />
                    <div className="gallery-caption">
                      <span className="gallery-category-badge">{item.category}</span>
                      <h3 className="gallery-title">{item.title}</h3>
                      <p className="gallery-text">{item.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No gallery items found</h3>
                <p className="mt-12">
                  Try selecting a different category to view more visuals.
                </p>
              </div>
            )}
          </div>
        </section>

        <CTASection
          eyebrow="Start a Conversation"
          title="Interested in the sectors represented in our gallery?"
          description="Connect with Pioneer Ventures to learn more about our business portfolio, operating sectors, and long-term growth direction."
          primary={{ label: 'Contact Us', path: '/contact' }}
          secondary={{ label: 'About Us', path: '/about' }}
        />
      </main>

      <Footer />
    </div>
  );
}