import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import logo from '../../assets/logo.jpg';

export default function Navbar() {
  const { company, navigation } = siteContent;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar" aria-label="Primary navigation">

          <Link to="/" className="nav-brand" aria-label={`${company.name} home`}>
            <div className="nav-logo-mark">
              <img src={logo} alt="Pioneer Ventures logo" />
            </div>
            <div className="nav-brand-text">
              <strong>{company.name}</strong>
              <span>{company.tagline}</span>
            </div>
          </Link>

          <div className="nav-links-wrap">
            <div className="nav-links">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav-cta">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
        <div className="container">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

    </header>
  );
}