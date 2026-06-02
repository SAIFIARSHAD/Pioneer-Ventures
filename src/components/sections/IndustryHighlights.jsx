import { Link } from 'react-router-dom';
import SectionWrapper from '../ui/SectionWrapper';
import { siteContent } from '../../data/siteContent';

export default function IndustryHighlights() {
  const items = siteContent.businessVerticals.slice(4, 8);

  return (
    <SectionWrapper
      eyebrow="Industry Highlights"
      title="Expanding capability across future-relevant sectors"
      description="From technology to renewable energy, our extended sectors reflect a wider commitment to transformation and sustainable growth."
    >
      <div className="grid-4">
        {items.map((item) => (
          <article className="image-card" key={item.slug}>
            <div className="image-card-media">
              <img src={item.imageUrl} alt={item.title} />
            </div>

            <div className="image-card-body">
              <span
                className="eyebrow"
                style={{ marginBottom: '14px', fontSize: '0.72rem', padding: '7px 12px' }}
              >
                Sector
              </span>

              <h3>{item.title}</h3>
              <p style={{ marginTop: '10px' }}>{item.shortDescription}</p>

              <div style={{ marginTop: '18px' }}>
                <Link to="/services" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}