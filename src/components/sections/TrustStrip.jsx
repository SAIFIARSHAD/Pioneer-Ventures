import { siteContent } from '../../data/siteContent';

export default function TrustStrip() {
  return (
    <section className="section-sm" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="stats-grid">
          {siteContent.home.trustStrip.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}