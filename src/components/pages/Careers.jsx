import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/ui/CTASection';
import { siteContent } from '../data/siteContent';

const whyJoinBlocks = [
  {
    title: 'Multi-industry exposure',
    description:
      'Pioneer Ventures offers a professional environment where talent can contribute across diverse business sectors and gain broader commercial perspective.',
  },
  {
    title: 'Growth-oriented culture',
    description:
      'We believe in supporting people who are eager to learn, adapt, and create long-term impact through disciplined and meaningful work.',
  },
  {
    title: 'Future-facing mindset',
    description:
      'We value individuals who are curious, solution-driven, and ready to participate in business environments shaped by innovation and change.',
  },
  {
    title: 'Professional credibility',
    description:
      'Our work culture is guided by trust, accountability, quality, and respect—principles that support both personal growth and organizational strength.',
  },
];

const workPrinciples = [
  {
    step: '01',
    title: 'Collaborate with intent',
    text: 'We encourage teamwork built on communication, ownership, and mutual respect across roles and responsibilities.',
  },
  {
    step: '02',
    title: 'Learn continuously',
    text: 'We value a mindset of ongoing learning so that our teams remain relevant, capable, and ready for evolving business needs.',
  },
  {
    step: '03',
    title: 'Deliver with quality',
    text: 'Every role contributes to the larger Pioneer Ventures identity, which is why consistency, care, and professionalism matter deeply.',
  },
  {
    step: '04',
    title: 'Grow responsibly',
    text: 'We support progress that is ambitious but grounded, helping people build careers with direction, confidence, and integrity.',
  },
];

export default function Careers() {
  const { careersPage } = siteContent;

  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow={careersPage.hero.eyebrow}
          title={careersPage.hero.title}
          subtitle={careersPage.hero.subtitle}
          primaryCta={{ label: 'View Open Roles', path: '/careers' }}
          secondaryCta={{ label: 'Contact HR', path: '/contact' }}
          stats={[
            { value: 'People-First', label: 'Work Culture' },
            { value: 'Growth-Led', label: 'Career Outlook' },
            { value: 'Multi-Industry', label: 'Exposure' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
            alt: 'Professional team collaborating in a modern workplace',
          }}
        />

        <SectionWrapper
          eyebrow="Career at Pioneer Ventures"
          title="A workplace designed for collaboration, growth, and meaningful contribution"
          description="We are building a professional environment where people can grow with clarity, contribute with confidence, and work with purpose."
        >
          <div className="split-section">
            <div className="content-stack">
              <p>{careersPage.cultureDescription}</p>
              <p>
                At Pioneer Ventures, we see our people as the foundation of long-term
                business strength. We aim to create a workplace where initiative is
                encouraged, ideas are respected, and performance is supported by a
                culture of trust and continuous improvement.
              </p>
              <p>
                Whether you are in a technical, operational, strategic, or support
                role, your contribution matters to the larger direction of the group.
              </p>
            </div>

            <div className="image-overlay-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="Employees working together in a collaborative office environment"
              />
              <div className="image-overlay-content">
                <h3>{careersPage.cultureTitle}</h3>
                <p>
                  A professional and inclusive environment where ideas, ownership,
                  and growth come together.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Why Join Us"
          title="What makes the Pioneer Ventures work environment distinctive"
          description="We offer more than open positions; we offer an environment where people can contribute to meaningful work with long-term potential."
          alt
          center
        >
          <div className="grid-2">
            {whyJoinBlocks.map((item, index) => (
              <article className="card" key={item.title}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Benefits & Perks"
          title="An employee experience built around support and development"
          description="Candidates want clarity around benefits and workplace value, so we highlight the advantages that shape our professional environment." 
          center
        >
          <div className="grid-2">
            {careersPage.benefits.map((benefit, index) => (
              <article className="card" key={benefit}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{benefit}</h3>
                <p style={{ marginTop: '12px' }}>
                  Designed to help our teams work effectively, grow confidently,
                  and contribute in a supportive environment.
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Work Philosophy"
          title="How we think about professional growth and contribution"
          description="Our culture is shaped by principles that help people succeed while strengthening the group as a whole."
          alt
        >
          <div className="grid-4">
            {workPrinciples.map((item) => (
              <article className="card" key={item.step}>
                <div className="icon-badge">{item.step}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px' }}>{item.text}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Hiring Process"
          title={careersPage.processTitle}
          description={careersPage.processDescription}
        >
          <div className="grid-4">
            {careersPage.processSteps.map((step, index) => (
              <article className="card" key={step}>
                <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{step}</h3>
                <p style={{ marginTop: '12px' }}>
                  We aim to keep this stage clear, respectful, and relevant so
                  every candidate understands what comes next.
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Open Positions"
          title="Current opportunities across Pioneer Ventures"
          description="We are looking for talented professionals who can bring skill, ownership, and a growth mindset to our expanding business environment."
          alt
        >
          <div className="grid-2">
            {careersPage.openPositions.map((job, index) => (
              <article className="image-card" key={job.title}>
                <div
                  className="image-card-body"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    minHeight: '100%',
                    padding: '32px',
                  }}
                >
                  <div>
                    <span className="eyebrow" style={{ marginBottom: '16px' }}>
                      Role {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{job.title}</h3>
                    <p style={{ marginTop: '12px' }}>{job.description}</p>
                  </div>

                  <div className="info-panel" style={{ padding: '20px', borderRadius: '20px' }}>
                    <ul className="info-list">
                      <li>
                        <span>Location</span>
                        <strong>Noida, Delhi NCR</strong>
                      </li>
                      <li>
                        <span>Department</span>
                        <strong>{job.title}</strong>
                      </li>
                      <li>
                        <span>Apply via</span>
                        <strong>{siteContent.company.hrEmail}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          eyebrow="Career Snapshot"
          title="A workplace built around people, potential, and progress"
          description="A strong careers page should answer common candidate questions, highlight benefits, and clearly present the opportunity to join the company." 
          center
        >
          <div className="stats-grid">
            <article className="stat-card">
              <strong>5+</strong>
              <p>Current featured roles open across business functions.</p>
            </article>
            <article className="stat-card">
              <strong>Inclusive</strong>
              <p>A collaborative environment shaped by respect and teamwork.</p>
            </article>
            <article className="stat-card">
              <strong>Growth-Led</strong>
              <p>Career opportunities supported by learning and development.</p>
            </article>
            <article className="stat-card">
              <strong>Transparent</strong>
              <p>A hiring process designed to be fair, structured, and clear.</p>
            </article>
          </div>
        </SectionWrapper>

        <CTASection
          eyebrow="Join Pioneer Ventures"
          title="Take the next step in your professional journey"
          description="If you are ready to contribute to a future-focused organization, we invite you to explore our open roles and connect with our team."
          primary={{ label: 'Apply by Email', path: '/contact' }}
          secondary={{ label: 'Contact HR', path: '/contact' }}
        />
      </main>

      <Footer />
    </div>
  );
}