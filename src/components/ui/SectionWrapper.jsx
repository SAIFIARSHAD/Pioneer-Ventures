export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  alt = false,
  compact = false,
  center = false,
}) {
  return (
    <section
      id={id}
      className={`${compact ? 'section-sm' : 'section'} ${alt ? 'section-alt' : ''} ${className}`}
    >
      <div className="container">
        {(eyebrow || title || description) && (
          <div
            className="section-heading"
            style={{
              textAlign: center ? 'center' : 'left',
              marginInline: center ? 'auto' : '0',
            }}
          >
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}