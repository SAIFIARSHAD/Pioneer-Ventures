import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TrustStrip from '../components/sections/TrustStrip';
import BrandIntro from '../components/sections/BrandIntro';
import AboutPreview from '../components/sections/AboutPreview';
import PortfolioShowcase from '../components/sections/PortfolioShowcase';
import ValueArchitecture from '../components/sections/ValueArchitecture';
import IndustryHighlights from '../components/sections/IndustryHighlights';
import HomeCTA from '../components/sections/HomeCTA';

export default function Home() {
  return (
    <div className="page-shell">
      <style>{`
       /* ── HOME HERO ─────────────────────────────── */
.home-hero {
  position: relative;
  overflow: hidden;
  padding: 56px 0 96px;
  background:
    radial-gradient(ellipse 60% 50% at 8% 22%, rgba(13,158,195,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 92% 16%, rgba(201,21,43,0.11) 0%, transparent 55%),
    linear-gradient(180deg, #f4fafd 0%, #fdf6f7 100%);
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(13,158,195,0.13) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 80%);
  pointer-events: none;
  z-index: 0;
}

.home-hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 52px;
  align-items: center;
}

/* ── LEFT COPY ── */
.home-hero-copy {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.home-hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(13,158,195,0.10);
  border: 1px solid rgba(13,158,195,0.18);
  color: #087b98;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  width: fit-content;
}

.home-hero-kicker::before {
  content: '';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c9152b;
  flex-shrink: 0;
}

.home-hero-bar {
  width: 80px;
  height: 5px;
  border-radius: 999px;
  background: linear-gradient(90deg, #c9152b, #0d9ec3);
  margin: 16px 0 20px;
}

.home-hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 1.6rem + 3.2vw, 5.6rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #122033;
  margin: 0 0 24px;
  max-width: 9ch;
}

.home-hero-title .word-innovation {
  background: linear-gradient(135deg, #c9152b 0%, #0d9ec3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.home-hero-title .word-growth {
  background: linear-gradient(135deg, #0d9ec3 0%, #087b98 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.home-hero-subtitle {
  font-size: 1.05rem;
  color: #5f6878;
  line-height: 1.7;
  max-width: 52ch;
  margin: 0 0 34px;
}

.home-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
}

/* ── METRICS ROW ── */
.home-hero-metrics {
  display: flex;
  gap: 0;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(13,158,195,0.12);
  background: rgba(255,255,255,0.80);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(18,32,51,0.06);
}

.home-metric {
  flex: 1;
  padding: 18px 16px;
  text-align: center;
  border-right: 1px solid rgba(13,158,195,0.10);
}

.home-metric:last-child { border-right: none; }

.home-metric strong {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #087b98;
  margin-bottom: 4px;
}

.home-metric span {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #8f98a6;
}

/* ── RIGHT VISUAL ── */
.home-hero-visual {
  position: relative;
  min-height: 580px;
}

.hhv-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.hhv-blob-red {
  width: 210px; height: 210px;
  top: -10px; right: 0;
  background: rgba(201,21,43,0.16);
  filter: blur(6px);
}
.hhv-blob-cyan {
  width: 260px; height: 260px;
  bottom: 10px; left: -20px;
  background: rgba(13,158,195,0.14);
  filter: blur(8px);
}

.hhv-dots {
  position: absolute;
  top: 20px; right: 14px;
  width: 140px; height: 140px;
  background-image: radial-gradient(circle, rgba(13,158,195,0.28) 1.5px, transparent 1.5px);
  background-size: 14px 14px;
  z-index: 1;
  pointer-events: none;
}

.hhv-main {
  position: absolute;
  top: 24px; left: 8px; right: 48px; bottom: 64px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 28px 64px rgba(12,28,52,0.18);
  transform: rotate(-2deg);
  z-index: 2;
}

.hhv-main img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}

.hhv-main::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5,14,30,0.04) 0%, rgba(5,14,30,0.68) 100%);
  z-index: 1;
}

.hhv-img-label {
  position: absolute;
  bottom: 22px; left: 22px; right: 22px;
  z-index: 2;
  color: #fff;
}

.hhv-img-label .badge-tight {
  background: rgba(201,21,43,0.85);
  color: #fff;
  font-size: 0.68rem;
  padding: 5px 10px;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 10px;
}

.hhv-img-label h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  line-height: 1.1;
  font-weight: 700;
  margin: 0;
  max-width: 18ch;
}

.hhv-chip {
  position: absolute;
  z-index: 4;
  padding: 12px 16px;
  border-radius: 16px;
  background: rgba(255,255,255,0.90);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(13,158,195,0.12);
  box-shadow: 0 14px 36px rgba(12,28,52,0.09);
  min-width: 150px;
}

.hhv-chip-label {
  display: block;
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #c9152b;
  margin-bottom: 4px;
}

.hhv-chip strong {
  display: block;
  font-size: 0.9rem;
  color: #122033;
  font-weight: 700;
}

.hhv-chip-1 { top: 14px; left: -10px; }
.hhv-chip-2 { top: 50%; right: -14px; transform: translateY(-50%); }

.hhv-card {
  position: absolute;
  bottom: 0; right: 0;
  z-index: 4;
  width: 230px;
  padding: 18px 20px;
  border-radius: 22px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(13,158,195,0.10);
  box-shadow: 0 16px 44px rgba(12,28,52,0.10);
}

.hhv-card-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.hhv-card-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c9152b, #0d9ec3);
  flex-shrink: 0;
}

.hhv-card strong {
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  color: #c9152b;
  font-weight: 800;
}

.hhv-card p {
  margin: 0;
  font-size: 0.85rem;
  color: #5f6878;
  line-height: 1.5;
}

.hhv-tags {
  position: absolute;
  bottom: -26px; left: 8px; right: 48px;
  z-index: 4;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hhv-tag {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: #fff;
  border: 1px solid rgba(13,158,195,0.14);
  color: #087b98;
  box-shadow: 0 4px 10px rgba(13,158,195,0.07);
}

/* ══════════════════════════════════════
   TABLET — 1024px
══════════════════════════════════════ */
@media (max-width: 1024px) {
  .home-hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .home-hero-title {
    max-width: none;
  }
  .home-hero-visual {
    min-height: 460px;
  }
  .hhv-chip-2 {
    right: 0;
  }
}

/* ══════════════════════════════════════
   MOBILE — 768px
══════════════════════════════════════ */
@media (max-width: 768px) {
  .home-hero {
    padding: 36px 0 48px;
  }

  .home-hero-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .home-hero-title {
    font-size: clamp(2.2rem, 8vw, 3.2rem);
    max-width: none;
    line-height: 1.0;
  }

  .home-hero-subtitle {
    font-size: 0.96rem;
    margin-bottom: 24px;
  }

  .home-hero-btns {
    margin-bottom: 28px;
  }

  .home-hero-btns .btn {
    flex: 1 1 140px;
    justify-content: center;
  }

  /* Metrics: row stays on mobile, scrollable */
  .home-hero-metrics {
    flex-direction: row;
    overflow-x: auto;
    scrollbar-width: none;
    border-radius: 16px;
  }
  .home-hero-metrics::-webkit-scrollbar { display: none; }

  .home-metric {
    flex: 0 0 auto;
    min-width: 110px;
    padding: 14px 12px;
    text-align: center;
    border-right: 1px solid rgba(13,158,195,0.10);
    border-bottom: none;
  }
  .home-metric:last-child { border-right: none; }

  /* Visual: simplified on mobile */
  .home-hero-visual {
    min-height: 280px;
    margin-bottom: 16px;
  }

  /* Make main image static block instead of absolute */
  .hhv-main {
    position: relative;
    top: auto; left: auto; right: auto; bottom: auto;
    width: 100%;
    height: 260px;
    transform: rotate(0deg);
    border-radius: 20px;
  }

  .hhv-main img {
    height: 260px;
    object-fit: cover;
  }

  /* hide floating chips, blobs, dots on mobile */
  .hhv-chip-1,
  .hhv-chip-2,
  .hhv-blob,
  .hhv-dots {
    display: none;
  }

  /* tags: inline below image */
  .hhv-tags {
    position: static;
    margin-top: 14px;
    flex-wrap: wrap;
  }

  /* card: full width below image */
  .hhv-card {
    position: static;
    width: 100%;
    margin-top: 14px;
    box-sizing: border-box;
  }
}

/* ══════════════════════════════════════
   MOBILE — 480px
══════════════════════════════════════ */
@media (max-width: 480px) {
  .home-hero {
    padding: 28px 0 40px;
  }

  .home-hero-kicker {
    font-size: 0.65rem;
    padding: 6px 12px;
  }

  .home-hero-title {
    font-size: clamp(2rem, 9vw, 2.6rem);
    letter-spacing: -0.03em;
  }

  .home-hero-btns .btn {
    flex: 1 1 100%;
    min-height: 48px;
  }

  .home-metric strong {
    font-size: 1rem;
  }

  .home-metric span {
    font-size: 0.64rem;
  }
}
      `}</style>

      <Navbar />

      <main className="page-main">

        {/* ════ HERO ════ */}
        <section className="home-hero">
          <div className="container">
            <div className="home-hero-inner">

              {/* LEFT — copy */}
              <div className="home-hero-copy">
                <span className="home-hero-kicker">Diversified Business Group</span>
                <div className="home-hero-bar" />

                <h1 className="home-hero-title">
                  Future of<br />
                  <span className="word-innovation">innovation</span><br />
                  <span className="word-growth">and growth</span>
                </h1>

                <p className="home-hero-subtitle">
                  Pioneer Ventures Group is building a modern multi-sector business identity
                  focused on trust, expansion, and long-term value creation.
                </p>

                <div className="home-hero-btns">
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  <Link to="/services" className="btn btn-secondary">View Portfolio</Link>
                </div>

                <div className="home-hero-metrics">
                  <div className="home-metric">
                    <strong>8+</strong>
                    <span>Business Sectors</span>
                  </div>
                  <div className="home-metric">
                    <strong>Vision-Led</strong>
                    <span>Group Direction</span>
                  </div>
                  <div className="home-metric">
                    <strong>Long-Term</strong>
                    <span>Growth Focus</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — visual */}
              <div className="home-hero-visual">
                <div className="hhv-blob hhv-blob-red" />
                <div className="hhv-blob hhv-blob-cyan" />
                <div className="hhv-dots" />

                {/* floating chips */}
                <div className="hhv-chip hhv-chip-1">
                  <span className="hhv-chip-label">Media</span>
                  <strong>Editorial &amp; Broadcast</strong>
                </div>

                <div className="hhv-chip hhv-chip-2">
                  <span className="hhv-chip-label">Technology</span>
                  <strong>Digital Capability</strong>
                </div>

                {/* main image */}
                <div className="hhv-main">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                    alt="Modern corporate towers representing diversified growth"
                    width="1200"
                    height="900"
                    loading="eager"
                  />
                  <div className="hhv-img-label">
                    <span className="badge-tight">Pioneer Ventures</span>
                    <h3>Built for modern scale and credibility</h3>
                  </div>
                </div>

                {/* sector tags */}
                <div className="hhv-tags">
                  <span className="hhv-tag">Construction</span>
                  <span className="hhv-tag">Healthcare</span>
                  <span className="hhv-tag">Real Estate</span>
                  <span className="hhv-tag">Renewable Energy</span>
                </div>

                {/* bottom card */}
                <div className="hhv-card">
                  <div className="hhv-card-brand">
                    <div className="hhv-card-dot" />
                    <strong>Pioneer Ventures</strong>
                  </div>
                  <p>Brand-led growth powered by ambition, clarity, and modern business direction.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <TrustStrip />
        <BrandIntro />
        <AboutPreview />
        <PortfolioShowcase />
        <ValueArchitecture />
        <IndustryHighlights />
        <HomeCTA />

      </main>

      <Footer />
    </div>
  );
}