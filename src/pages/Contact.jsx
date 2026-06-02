import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';

const contactDetails = [
  {
    title: 'Office Address',
    value: 'A-142 Pioneer Ventures, Noida, Sector - 63, 201301',
    detail: 'Primary business location for professional communication and scheduled meetings.',
  },
  {
    title: 'Email',
    value: 'info@pioneerventure.in',
    detail: 'For business inquiries, partnerships, and general communication.',
    link: 'mailto:info@pioneerventure.in',
  },
  {
    title: 'Phone',
    value: '9810475719',
    detail: 'For direct business discussions and contact coordination.',
    link: 'tel:9810475719',
  },
];

const inquiryTypes = [
  'Business inquiries and partnerships.',
  'Sector-specific discussions and collaborations.',
  'General communication and introductions.',
  'Career and opportunity-related queries.',
];

export default function Contact() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow="Contact Us"
          title="Get in touch with our team"
          accentText="our team"
          subtitle="Have a question or want to work together? Fill out the form below or send us an email at info@pioneerventure.in."
          primaryCta={{ label: 'View Portfolio', path: '/services' }}
          secondaryCta={{ label: 'About Us', path: '/about' }}
          stats={[
            { value: 'Noida', label: 'Office Presence' },
            { value: 'Direct Access', label: 'Phone & Email' },
            { value: 'Business Ready', label: 'Professional Communication' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
            alt: 'Professional business meeting and discussion environment',
          }}
        />

        <section className="section">
          <div className="container">
            <div className="split-section">
              <div className="content-stack">
                <span className="eyebrow">Contact Info</span>
                <h2>Start a conversation with us</h2>
                <p>
                  We are open to professional discussions, business opportunities,
                  and strategic collaborations across sectors.
                </p>
                <p>
                  Reach out directly through email, phone, or the message form and
                  our team will review your communication.
                </p>

                <ul>
                  {inquiryTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-panel">
                <span className="eyebrow">Contact Information</span>
                <div className="grid-1 mt-24">
                  {contactDetails.map((item) => (
                    <article key={item.title} className="card">
                      <h3>{item.title}</h3>

                      {item.link ? (
                        <a href={item.link} className="link-accent mt-12">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-12 mb-0">{item.value}</p>
                      )}

                      <p className="mt-12">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="split-section">
              <div className="info-panel">
                <span className="eyebrow">Send a Message</span>
                <h3 className="mt-20">Use the form below to reach our team</h3>
                <p className="mt-16">
                  Fill in your details and share your message for business communication,
                  partnership inquiries, or general discussion.
                </p>

                <form className="form-grid mt-24">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="input"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="input"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="input"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label" htmlFor="contact-message">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="textarea"
                      placeholder="Write your message"
                    />
                  </div>

                  <div className="form-group full">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                    <p className="muted-note mt-12">
                      Your information will only be used to respond to your inquiry.
                    </p>
                  </div>
                </form>
              </div>

              <div className="content-stack">
                <span className="eyebrow">Business Communication</span>
                <h2>Innovation meets opportunity across multiple industries</h2>
                <p>
                  Pioneer Ventures is positioned around diversified growth, strategic thinking,
                  and sector-spanning business direction.
                </p>
                <p>
                  We welcome relevant inquiries from partners, clients, collaborators,
                  and professionals looking to connect with our team.
                </p>

                <div className="info-panel gradient-panel">
                  <div className="grid-1">
                    <article className="card">
                      <h3>Office</h3>
                      <p>A-142 Pioneer Ventures, Noida, Sector - 63, 201301</p>
                    </article>

                    <article className="card">
                      <h3>Email</h3>
                      <a href="mailto:info@pioneerventure.in" className="link-accent mt-12">
                        info@pioneerventure.in
                      </a>
                    </article>

                    <article className="card">
                      <h3>Phone</h3>
                      <a href="tel:9810475719" className="link-accent mt-12">
                        9810475719
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Pioneer Ventures"
          title="Looking to connect with us?"
          description="Use the contact form or direct contact details to start a professional conversation with Pioneer Ventures."
          primary={{ label: 'View Portfolio', path: '/services' }}
          secondary={{ label: 'About Us', path: '/about' }}
        />
      </main>

      <Footer />
    </div>
  );
}