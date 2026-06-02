import { Link } from 'react-router-dom';

export default function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="card cta-panel">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}

          <div className="d-flex flex-col gap-16 max-w-760 mt-18">
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}

            {(primary || secondary) && (
              <div className="btn-group mt-8">
                {primary ? (
                  <Link to={primary.path} className="btn btn-primary">
                    {primary.label}
                  </Link>
                ) : null}

                {secondary ? (
                  <Link to={secondary.path} className="btn btn-outline">
                    {secondary.label}
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}