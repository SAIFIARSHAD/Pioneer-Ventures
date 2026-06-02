import { Link } from 'react-router-dom';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats = [],
  image,
  accentText,
}) {
  const resolvedAccent = accentText && title.includes(accentText) ? accentText : '';
  const titleParts = resolvedAccent ? title.split(resolvedAccent) : [title];

  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-grid">
          <div className="page-hero-copy">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}

            <div className="hero-accent-bar" />

            <h1 className="hero-title clean-hero-title">
              {resolvedAccent ? (
                <>
                  <span>{titleParts[0]}</span>
                  <span className="hero-title-accent"> {resolvedAccent}</span>
                  <span>{titleParts[1]}</span>
                </>
              ) : (
                <span>{title}</span>
              )}
            </h1>

            {subtitle ? <p>{subtitle}</p> : null}

            {(primaryCta || secondaryCta) && (
              <div className="btn-group">
                {primaryCta ? (
                  <Link to={primaryCta.path} className="btn btn-primary">
                    {primaryCta.label}
                  </Link>
                ) : null}

                {secondaryCta ? (
                  <Link to={secondaryCta.path} className="btn btn-secondary">
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            )}

            {stats.length > 0 && (
              <div className="hero-stats">
                {stats.map((item) => (
                  <div className="hero-stat" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hero-visual-shell">
            <div className="hero-graphic-orb orb-red" />
            <div className="hero-graphic-orb orb-cyan" />
            <div className="hero-grid-lines" />

            {image ? (
              <>
                <div className="image-overlay-card">
                  <img src={image.src} alt={image.alt} />
                  <div className="image-overlay-content">
                    {eyebrow ? <span className="eyebrow badge-tight">{eyebrow}</span> : null}
                    <h3>{title}</h3>
                    {subtitle ? <p>{subtitle}</p> : null}
                  </div>
                </div>

                <div className="hero-floating-card">
                  <strong>Pioneer Ventures</strong>
                  <p>
                    Brand-led growth powered by ambition, clarity, and modern business direction.
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}