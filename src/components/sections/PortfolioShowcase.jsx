import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import SectionWrapper from '../ui/SectionWrapper';

export default function PortfolioShowcase() {
  const featuredItems = siteContent.businessVerticals.slice(0, 4);

  return (
    <SectionWrapper
      eyebrow="Featured Portfolio"
      title="A diversified business presence built for relevance and reach"
      description="Our key sectors reflect a balanced approach to opportunity, innovation, and long-term commercial strength."
    >
      <div className="grid-2">
        {featuredItems.map((item, index) => (
          <article
            className="image-card"
            key={item.slug}
            style={{
              display: 'grid',
              gridTemplateColumns: index === 0 || index === 3 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
              alignItems: 'stretch',
            }}
          >
            <div className="image-card-media" style={{ aspectRatio: 'auto', minHeight: '100%' }}>
              <img src={item.imageUrl} alt={item.title} />
            </div>

            <div
              className="image-card-body"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="eyebrow" style={{ marginBottom: '14px' }}>
                  {item.title}
                </span>

                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.fullDescription}</p>
              </div>

              <div style={{ marginTop: '22px' }}>
                <Link to="/services" className="btn btn-secondary">
                  View Portfolio
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}