import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';
import { siteContent } from '../data/siteContent';

const contactChannels = [
  {
    title: 'General Inquiries',
    value: siteContent.company.email,
    detail:
      'For business communication, service-related questions, partnerships, or general information.',
    link: `mailto:${siteContent.company.email}`,
  },
  {
    title: 'HR & Careers',
    value: siteContent.company.hrEmail,
    detail:
      'For job applications, hiring-related communication, and recruitment queries.',
    link: `mailto:${siteContent.company.hrEmail}`,
  },
  {
    title: 'Call Us',
    value: siteContent.company.phone,
    detail:
      'For direct conversation regarding opportunities, support, or immediate business questions.',
    link: `tel:${siteContent.company.phoneRaw}`,
  },
];

const reasonsToConnect = [
  {
    title: 'Business inquiries',
    description:
      'Reach out to discuss collaborations, business opportunities, partnerships, or strategic conversations.',
  },
  {
    title: 'Project discussions',
    description:
      'Connect with us if you would like to know more about our portfolio, sectors, and operating approach.',
  },
  {
    title: 'Career opportunities',
    description:
      'Candidates can contact our team to learn more about open roles and the hiring process.',
  },
  {
    title: 'General assistance',
    description:
      'For all other questions, our team will direct your message to the appropriate point of contact.',
  },
];

export default function Contact() {
  const { contactPage, company } = siteContent;

  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow={contactPage.hero.eyebrow}
          title={contactPage.hero.title}
          subtitle={contactPage.hero.subtitle}
          primaryCta={{ label: 'Send a Message', path: '/contact' }}
          secondaryCta={{ label: 'View Portfolio', path: '/services' }}
          stats={[
            { value: 'Direct Access', label: 'Email & Phone' },
            { value: 'Noida', label: 'Office Location' },
            { value: 'Fast Response', label: 'Business Communication' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1516321310764-8d5b10cb0a44?auto=format&fit=crop&w=1200&q=80',
            alt: 'Professional customer communication and business support workspace',
          }}
        />

        <SectionWrapper
          eyebrow="Start a Conversation"
          title="We welcome meaningful business communication"
          description="Whether you want to discuss partnerships, business opportunities, careers, or general inquiries, our team is ready to connect."
        >
          <div className="split-section">
            <div className="content-stack">
              <p>
                At Pioneer Ventures, communication is an important part of the
                relationships we build. We aim to keep every interaction
                professional, clear, and responsive so that visitors, partners,
                and candidates can connect with confidence.
              </p>
              <p>
                If your inquiry relates to our business sectors, hiring activity,
                or collaboration opportunities, you can use the contact form or
                choose a direct communication channel below.
              </p>
              <div className="badge-row" style={{ marginTop: '8px' }}>
                <span className="badge">Business Inquiries</span>
                <span className="badge">Partnership Requests</span>
                <span className="badge">Career Questions</span>
                <span className="badge">General Communication</span>
              </div>
            </div>

            <div className="image-overlay-card">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Professionals meeting and discussing business collaboration"
              />
              <div className="image-overlay-content">
                <h3>Professional communication with clarity and trust</h3>
                <p>
                  We are committed to making every inquiry easy, direct, and
                  aligned with the right point of contact.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Contact Form"
          title="Send us your message"
          description="A clean and concise contact form makes it easier for users to reach out, while clear labels and confirmations improve trust and usability."
          alt
        >
          <div className="grid-2">
            <article className="info-panel">
              <h3 style={{ marginBottom: '10px' }}>{contactPage.formTitle}</h3>
              <p style={{ marginBottom: '24px' }}>{contactPage.formDescription}</p>

              <form className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">
                    First Name
                  </label>
                  <input id="firstName" type="text" className="input" placeholder="Enter your first name" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">
                    Last Name
                  </label>
                  <input id="lastName" type="text" className="input" placeholder="Enter your last name" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input id="email" type="email" className="input" placeholder="Enter your email address" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input id="phone" type="tel" className="input" placeholder="Enter your phone number" />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input id="subject" type="text" className="input" placeholder="Tell us what this inquiry is about" />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="textarea"
                    placeholder="Write your message here"
                  />
                </div>

                <div className="form-group full">
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                    Your information will only be used to respond to your inquiry.
                  </p>
                </div>

                <div className="form-group full">
                  <button type="submit" className="btn btn-primary">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </article>

            <article className="info-panel">
              <h3 style={{ marginBottom: '10px' }}>{contactPage.infoTitle}</h3>
              <p style={{ marginBottom: '24px' }}>
                You can also connect with us directly using the details below.
              </p>

              <ul className="info-list">
                <li>
                  <span>Office Address</span>
                  <strong>{company.fullAddress}</strong>
                </li>
                <li>
                  <span>Main Phone</span>
                  <strong>{company.phone}</strong>
                </li>
                <li>
                  <span>General Email</span>
                  <strong>{company.email}</strong>
                </li>
                <li>
                  <span>HR Email</span>
                  <strong>{company.hrEmail}</strong>
                </li>
              </ul>

              <div className="info-panel" style={{ marginTop: '24px', padding: '22px' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '1.05rem' }}>Business Hours</h3>
                <ul className="info-list">
                  <li>
                    <span>Monday - Friday</span>
                    <strong>10:00 AM - 6:00 PM</strong>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <strong>By appointment / limited availability</strong>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <strong>Closed</strong>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Direct Contact Channels"
          title="Choose the best way to reach the right team"
          description="Offering multiple contact methods helps users communicate in the way that is most convenient for them."
          center
        >
          <div className="grid-3">
            {contactChannels.map((item, index) => (
              <article className="card" key={item.title}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '10px' }}>{item.detail}</p>
                <a
                  href={item.link}
                  style={{
                    marginTop: '18px',
                    display: 'inline-block',
                    color: 'var(--color-primary)',
                    fontWeight: 800,
                  }}
                >
                  {item.value}
                </a>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Why Contact Us"
          title="Common reasons people reach out to Pioneer Ventures"
          description="User intent should shape the contact experience, so the page should guide visitors toward the most relevant route."
          alt
        >
          <div className="grid-2">
            {reasonsToConnect.map((item, index) => (
              <article className="card" key={item.title}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Location & Response"
          title="A visible office presence and clear response expectations build confidence"
          description="Contact pages perform better when they set clear expectations and reinforce that the company is accessible and professional."
        >
          <div className="split-section">
            <div className="info-panel">
              <h3 style={{ marginBottom: '16px' }}>Office Location</h3>
              <p style={{ marginBottom: '18px' }}>
                {company.legalName} is located at {company.fullAddress}. This
                office supports business communication, collaboration inquiries,
                and corporate interaction.
              </p>

              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  minHeight: '320px',
                  border: '1px solid rgba(11,59,143,0.1)',
                }}
              >
                <iframe
                  title="Pioneer Ventures office location"
                  src="https://www.google.com/maps?q=A-142,+Noida+Sector+63,+Noida,+Uttar+Pradesh+201301&z=14&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="content-stack">
              <div className="card">
                <h3>Response expectations</h3>
                <p style={{ marginTop: '12px' }}>
                  We aim to review inquiries promptly and route them to the most
                  relevant team based on the nature of the message.
                </p>
              </div>

              <div className="card">
                <h3>Professional communication</h3>
                <p style={{ marginTop: '12px' }}>
                  Clear response timing and visible contact information help users
                  feel that their message has been received and will be handled
                  responsibly.
                </p>
              </div>

              <div className="card">
                <h3>Accessible from every page</h3>
                <p style={{ marginTop: '12px' }}>
                  Because the contact page is linked through both the main
                  navigation and footer, users can reach out easily from
                  anywhere on the website.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTASection
          eyebrow="Reach Out Today"
          title="Start your conversation with Pioneer Ventures"
          description="Whether your message is about business, careers, partnerships, or general inquiries, we are ready to connect."
          primary={{ label: 'Send Inquiry', path: '/contact' }}
          secondary={{ label: 'Explore About Us', path: '/about' }}
        />
      </main>

      <Footer />
    </div>
  );
}