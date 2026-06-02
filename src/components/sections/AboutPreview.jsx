import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import SectionWrapper from '../ui/SectionWrapper';

export default function AboutPreview() {
  const { aboutHighlight } = siteContent.home;

  return (
    <SectionWrapper
      eyebrow={aboutHighlight.eyebrow}
      title={aboutHighlight.title}
      description=""
      alt
    >
      <div className="split-section">
        <div className="content-stack">
          <p>{aboutHighlight.description}</p>

          <ul>
            {aboutHighlight.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="btn-group" style={{ marginTop: '12px' }}>
            <Link to="/about" className="btn btn-primary">
              Discover Our Story
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Speak With Us
            </Link>
          </div>
        </div>

        <div className="image-overlay-card">
          <img src={aboutHighlight.image.src} alt={aboutHighlight.image.alt} />
          <div className="image-overlay-content">
            <h3>Built on credibility, creativity, and business depth</h3>
            <p>
              A premium multi-industry identity shaped by innovation, operational
              focus, and responsible expansion.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}