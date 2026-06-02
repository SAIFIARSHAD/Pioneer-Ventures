import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';

const benefits = [
  'Collaborative and inclusive work environment.',
  'Opportunities for growth and professional development.',
  'Competitive compensation and role-aligned benefits.',
  'Flexible and modern working culture where possible.',
  'Meaningful exposure across multiple industries and business functions.',
];

const positions = [
  {
    title: 'Full Stack Web Developer',
    description:
      'We are looking for a Full Stack Web Developer with 4 to 6 years of experience in modern web technologies, scalable application development, and full-cycle product execution.',
  },
  {
    title: 'Company Secretary',
    description:
      'This role focuses on secretarial responsibilities, statutory compliances, Companies Act requirements, listing regulations, and regulatory coordination.',
  },
  {
    title: 'Chartered Accountant',
    description:
      'We are looking for a skilled Chartered Accountant to manage daily accounting workflows, compliance responsibilities, reporting, and financial discipline.',
  },
  {
    title: 'Executive Assistant',
    description:
      'An opportunity to work closely with leadership on planning, communication, scheduling, coordination, and high-priority execution support.',
  },
  {
    title: 'Sales and Marketing Executive - Real Estate',
    description:
      'This role is focused on lead generation, relationship building, market outreach, and strategic promotion of real estate offerings.',
  },
];

const interviewSteps = [
  'Initial screening conversation.',
  'Role-specific discussion or technical evaluation.',
  'Final interaction with the hiring or leadership team.',
];

export default function Careers() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-main">
        <PageHero
          eyebrow="Careers"
          title="Join a team built around growth, responsibility, and ambition"
          accentText="growth, responsibility, and ambition"
          subtitle="At Pioneer Ventures, we value capable people, professional discipline, and long-term thinking. We are building opportunities across multiple business sectors and functions."
          primaryCta={{ label: 'Contact Us', path: '/contact' }}
          secondaryCta={{ label: 'View Portfolio', path: '/services' }}
          stats={[
            { value: 'Multi-Sector', label: 'Career Exposure' },
            { value: 'Growth-Led', label: 'Work Environment' },
            { value: 'People First', label: 'Hiring Approach' },
          ]}
          image={{
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Professional team collaboration in a modern workplace',
          }}
        />

        <section className="section section-alt">
          <div className="container">
            <div className="split-section">
              <div className="content-stack">
                <span className="eyebrow">Company Culture</span>
                <h2>A collaborative and inclusive professional environment</h2>
                <p>
                  At Pioneer Ventures, we believe that strong teams are built through
                  collaboration, mutual respect, and a shared commitment to quality work.
                </p>
                <p>
                  We aim to create an environment where professionals from different
                  backgrounds can contribute meaningfully, grow with confidence, and work
                  toward long-term outcomes.
                </p>
              </div>

              <div className="info-panel">
                <span className="eyebrow">Benefits</span>
                <div className="grid-1 mt-24">
                  {benefits.map((item, index) => (
                    <article key={item} className="card">
                      <h3>Benefit 0{index + 1}</h3>
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="split-section">
              <div className="content-stack">
                <span className="eyebrow">Interview Process</span>
                <h2>A clear and fair hiring journey</h2>
                <p>
                  Our hiring process is structured to understand your experience, role fit,
                  communication style, and ability to contribute meaningfully to the team.
                </p>
                <p>
                  We aim to keep the process transparent, respectful, and aligned with the
                  expectations of both the company and the candidate.
                </p>
              </div>

              <div className="info-panel">
                <span className="eyebrow">Apply</span>
                <h3 className="mt-20">Mail your CV for current openings</h3>
                <p className="mt-16">
                  Send your updated resume to our HR team and mention the role you are
                  applying for in the subject line.
                </p>
                <a
                  href="mailto:hrpioneer0012@gmail.com"
                  className="link-accent mt-16"
                >
                  hrpioneer0012@gmail.com
                </a>

                <div className="grid-1 mt-24">
                  {interviewSteps.map((step, index) => (
                    <article key={step} className="card">
                      <h3>Step 0{index + 1}</h3>
                      <p>{step}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="openpos" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Open Positions</span>
              <h2>Current opportunities at Pioneer Ventures</h2>
              <p>
                Explore our current openings and take the next step in your
                professional journey with us.
              </p>
            </div>

            <div className="grid-2">
              {positions.map((job, index) => (
                <article key={job.title} className="card">
                  <div className="icon-badge">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{job.title}</h3>
                  <p className="mt-12">{job.description}</p>
                  <a
                    href="mailto:hrpioneer0012@gmail.com"
                    className="link-accent mt-16"
                  >
                    Apply via email
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Careers at Pioneer Ventures"
          title="Interested in joining our team?"
          description="Send your resume to our HR team to explore current opportunities and future career possibilities at Pioneer Ventures."
          primary={{ label: 'Contact Us', path: '/contact' }}
          secondary={{ label: 'View Portfolio', path: '/services' }}
        />
      </main>

      <Footer />
    </div>
  );
}