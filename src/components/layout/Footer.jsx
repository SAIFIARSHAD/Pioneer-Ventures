import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import logo from '../../assets/logo.jpg';

export default function Footer() {
  const { company, navigation, footer } = siteContent;

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-brand" aria-label={`${company.name} home`}>
              <div className="nav-logo-mark" aria-hidden="true">
                <img src={logo} alt="Pioneer Ventures logo" />
              </div>

              <div className="nav-brand-text">
                <strong>{company.name}</strong>
                <span>{company.tagline}</span>
              </div>
            </Link>

            <p>{footer.description}</p>
          </div>

          <div>
            <h3 className="footer-title">{footer.quickLinksHeading}</h3>
            <div className="footer-links">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-title">{footer.contactHeading}</h3>
            <ul className="footer-contact">
              <li>{company.fullAddress}</li>
              <li>
                <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a href={`mailto:${company.hrEmail}`}>{company.hrEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{company.copyright}</span>
          <span>Designed for innovation, trust, and long-term growth.</span>
        </div>
      </div>
    </footer>
  );
}