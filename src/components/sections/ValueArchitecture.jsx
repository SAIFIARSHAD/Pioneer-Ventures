import SectionWrapper from '../ui/SectionWrapper';
import { siteContent } from '../../data/siteContent';

export default function ValueArchitecture() {
  return (
    <SectionWrapper
      eyebrow="Value Architecture"
      title="The principles behind our business philosophy"
      description="Our working model is guided by a set of clear values that influence how we build, collaborate, and expand."
      alt
      center
    >
      <div className="grid-3">
        {siteContent.home.values.map((item, index) => (
          <article className="card" key={item.title}>
            <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
            <h3>{item.title}</h3>
            <p style={{ marginTop: '10px' }}>{item.description}</p>
          </article>
        ))}

        <article className="card">
          <div className="icon-badge">04</div>
          <h3>Sustainability</h3>
          <p style={{ marginTop: '10px' }}>
            We support business development that respects long-term environmental,
            operational, and social responsibility.
          </p>
        </article>

        <article className="card">
          <div className="icon-badge">05</div>
          <h3>Collaboration</h3>
          <p style={{ marginTop: '10px' }}>
            We believe enduring progress is built through aligned partnerships,
            shared vision, and open communication.
          </p>
        </article>

        <article className="card">
          <div className="icon-badge">06</div>
          <h3>Excellence</h3>
          <p style={{ marginTop: '10px' }}>
            We maintain high standards of quality, discipline, and consistency
            across every business touchpoint.
          </p>
        </article>
      </div>
    </SectionWrapper>
  );
}