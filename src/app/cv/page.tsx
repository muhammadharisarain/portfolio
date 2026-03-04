import type { Metadata } from 'next'
import Image from 'next/image'
import CVToolbar from './CVToolbar'

export const metadata: Metadata = {
  title: 'CV — Muhammad Haris Arain',
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ─── CV Data ─────────────────────────────────────────────────────────────────
const cv = {
  name: 'Muhammad Haris Arain',
  title: 'Backend & MERN Stack Engineer',
  email: 'harisarain704@gmail.com',
  location: 'Lahore, Pakistan',
  github: 'github.com/muhammadharisarain',
  githubUrl: 'https://github.com/muhammadharisarain',
  linkedin: 'linkedin.com/in/muhammadharisarain',
  linkedinUrl: 'https://linkedin.com/in/muhammadharisarain',

  summary:
    'Passionate Backend & MERN Stack Engineer with hands-on experience building scalable web applications. Specialised in Node.js, Express.js, and NestJS for robust backend architectures, paired with React.js and Next.js for modern frontends. Proficient in both SQL (PostgreSQL) and NoSQL (MongoDB) databases. Currently driving technical excellence at XISLABS, delivering high-quality solutions across diverse domains — from social platforms and POS systems to real-time entertainment applications.',

  experience: [
    {
      title: 'Backend & MERN Stack Engineer',
      company: 'XISLABS',
      period: '2026 – Present',
      bullets: [
        'Built and deployed full-stack applications using NestJS, Express, Node.js, React, and Next.js.',
        'Designed and optimised SQL (PostgreSQL) and NoSQL (MongoDB) database schemas for high-performance workloads.',
        'Developed RESTful APIs and GraphQL endpoints integrated with third-party services and payment gateways.',
        'Implemented real-time features with Socket.io and WebRTC for live communication and gaming platforms.',
        'Delivered 6+ production projects across social, fintech, entertainment, and analytics domains in an Agile team.',
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's in Computer Science (BS-CS)",
      institution: 'Virtual University of Pakistan',
      period: '2022 – 2026',
    },
    {
      degree: 'Intermediate — Pre-Engineering (FSc)',
      institution: 'Superior College of Science, Hyderabad',
      period: 'Completed 2022',
    },
  ],

  skills: [
    {
      label: 'Frontend',
      value: 'React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Redux',
    },
    {
      label: 'Backend',
      value: 'Node.js, Express.js, NestJS, MongoDB, PostgreSQL, REST APIs, GraphQL, Socket.io, Redis',
    },
    {
      label: 'Tools',
      value: 'Git, GitHub, Docker, AWS, Vercel, Postman, CI/CD, Linux',
    },
  ],

  projects: [
    {
      title: 'Wayfellow',
      category: 'Social Platform',
      description:
        'Professional networking platform combining LinkedIn & Twitter features — job posting, event management, and real-time messaging for career growth.',
      tech: 'React, Node.js, MongoDB, Socket.io, Redux, AWS',
    },
    {
      title: 'Fatoraty',
      category: 'Business / POS',
      description:
        'Comprehensive Point of Sale and back-office management system with inventory control, transaction processing, receipt generation, and analytics.',
      tech: 'React, Node.js, MongoDB, AWS, Redux, Thermal Printing',
    },
    {
      title: 'Tamam',
      category: 'Form Management',
      description:
        'Sophisticated dynamic form builder with workflow automation and data analytics for streamlined business processes.',
      tech: 'React, Node.js, Express, PostgreSQL, Socket.io',
    },
    {
      title: 'Battle Saga',
      category: 'Web3 / Blockchain',
      description:
        'Web3 gaming platform with smart-contract integration — cryptocurrency tokens for in-game purchases, battles, and NFT rewards.',
      tech: 'React, Solidity, Web3.js, Ethereum, NFT, Smart Contracts',
    },
    {
      title: 'Campaign Estimator',
      category: 'Business Analytics',
      description:
        'Analytics tool for marketers to estimate campaign performance with CTA optimisation, audience reach prediction, and ROI calculation.',
      tech: 'React, TypeScript, Node.js, Chart.js',
    },
    {
      title: 'Karaoke System',
      category: 'Entertainment',
      description:
        'Feature-rich karaoke platform for Korean/Japanese markets with battle modes, song scoring, prize competitions, and real-time leaderboards.',
      tech: 'React, Node.js, WebRTC, Socket.io, Audio API, Redis',
    },
  ],
}

// ─── Section heading component ────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: '8.5pt',
      fontWeight: 800,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: '#0f172a',
      borderBottom: '1.5px solid #0f172a',
      paddingBottom: '5px',
      marginBottom: '12px',
    }}>
      {children}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CVPage() {
  return (
    <>
      <style>{`
        html, body {
          background-color: #e5e7eb !important;
          color: #111827 !important;
          font-family: 'Georgia', 'Times New Roman', serif !important;
        }

        * { box-sizing: border-box; }

        .cv-page-wrap {
          padding: 56px 20px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cv-sheet {
          background: #ffffff;
          width: 100%;
          max-width: 816px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.1);
          color: #1e293b;
          font-size: 10pt;
          line-height: 1.6;
        }

        /* ── Header band ── */
        .cv-header {
          padding: 36px 48px 28px;
          display: flex;
          gap: 28px;
          align-items: flex-start;
          border-bottom: 3px solid #0f172a;
        }

        .cv-photo-wrap {
          flex-shrink: 0;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #cbd5e1;
          background: #f1f5f9;
        }

        .cv-photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .cv-header-info { flex: 1; }

        .cv-name {
          font-size: 26pt;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
          margin: 0 0 3px;
          font-family: 'Georgia', serif;
          line-height: 1.1;
        }

        .cv-title {
          font-size: 11.5pt;
          font-weight: 400;
          color: #475569;
          margin: 0 0 16px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          letter-spacing: 0.2px;
        }

        .cv-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
        }

        .cv-contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 8.5pt;
          color: #475569;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          text-decoration: none;
        }

        .cv-contact-item:hover { color: #1d4ed8; }

        .cv-contact-item svg { flex-shrink: 0; color: #64748b; }

        /* ── Body ── */
        .cv-body {
          padding: 28px 48px 36px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .cv-section { margin-bottom: 20px; }

        .cv-summary {
          font-size: 9.5pt;
          color: #374151;
          line-height: 1.7;
          margin: 0;
        }

        /* Experience */
        .exp-block { margin-bottom: 0; }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1px;
        }

        .exp-job {
          font-size: 10.5pt;
          font-weight: 700;
          color: #0f172a;
        }

        .exp-date {
          font-size: 9pt;
          color: #64748b;
          white-space: nowrap;
          font-style: italic;
        }

        .exp-company {
          font-size: 10pt;
          color: #1d4ed8;
          font-weight: 600;
          margin-bottom: 7px;
          letter-spacing: 0.1px;
        }

        .exp-bullets { margin: 0; padding: 0; list-style: none; }

        .exp-bullet {
          display: flex;
          gap: 8px;
          margin-bottom: 4px;
          font-size: 9.5pt;
          color: #374151;
          line-height: 1.55;
        }

        .exp-bullet-mark {
          flex-shrink: 0;
          color: #94a3b8;
          font-weight: 700;
          margin-top: 1px;
        }

        /* Education */
        .edu-block { margin-bottom: 9px; }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .edu-degree {
          font-size: 10pt;
          font-weight: 700;
          color: #0f172a;
        }

        .edu-date {
          font-size: 9pt;
          color: #64748b;
          font-style: italic;
          white-space: nowrap;
        }

        .edu-inst {
          font-size: 9.5pt;
          color: #475569;
          font-style: italic;
        }

        /* Skills */
        .skill-row {
          display: flex;
          gap: 10px;
          margin-bottom: 6px;
          font-size: 9.5pt;
        }

        .skill-label {
          font-weight: 700;
          color: #0f172a;
          min-width: 72px;
          flex-shrink: 0;
        }

        .skill-val { color: #374151; }

        /* Projects */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 24px;
        }

        .proj-block {}

        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 3px;
        }

        .proj-title {
          font-size: 10pt;
          font-weight: 700;
          color: #0f172a;
        }

        .proj-cat {
          font-size: 8.5pt;
          color: #64748b;
          font-style: italic;
          white-space: nowrap;
          margin-left: 8px;
        }

        .proj-desc {
          font-size: 9pt;
          color: #475569;
          line-height: 1.55;
          margin: 0 0 4px;
        }

        .proj-tech {
          font-size: 8pt;
          color: #64748b;
        }

        .proj-tech-label { font-weight: 700; color: #475569; }

        /* Page 2 mini-header */
        .p2-mini {
          padding: 18px 48px 14px;
          border-bottom: 1.5px solid #cbd5e1;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p2-name {
          font-size: 12pt;
          font-weight: 700;
          color: #0f172a;
          font-family: 'Georgia', serif;
        }

        .p2-label {
          font-size: 8.5pt;
          color: #94a3b8;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        /* Print */
        @media print {
          @page { size: A4; margin: 14mm 16mm; }

          html, body {
            background: #fff !important;
          }

          .cv-page-wrap {
            padding: 0 !important;
          }

          .cv-sheet {
            box-shadow: none !important;
            max-width: 100% !important;
          }

          .cv-header { padding: 0 0 20px; }
          .cv-body { padding: 18px 0 0; }
          .p2-mini { padding: 0 0 12px; }

          .print-break { page-break-before: always; margin-top: 0; }

          .proj-grid { gap: 10px 20px; }
        }
      `}</style>

      <CVToolbar />

      <div className="cv-page-wrap">
        <div className="cv-sheet">

          {/* ── Header ── */}
          <div className="cv-header">
            <div className="cv-photo-wrap">
              <Image
                src="/profile_image.jpeg"
                alt="Muhammad Haris Arain"
                width={108}
                height={108}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>

            <div className="cv-header-info">
              <h1 className="cv-name">{cv.name}</h1>
              <p className="cv-title">{cv.title}</p>

              <div className="cv-contacts">
                <a href={`mailto:${cv.email}`} className="cv-contact-item">
                  <MailIcon /> {cv.email}
                </a>
                <span className="cv-contact-item">
                  <MapPinIcon /> {cv.location}
                </span>
                <a href={cv.githubUrl} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                  <GithubIcon /> {cv.github}
                </a>
                <a href={cv.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                  <LinkedinIcon /> {cv.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* ── Body ── */}
          <div className="cv-body">

            {/* Summary */}
            <div className="cv-section">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="cv-summary">{cv.summary}</p>
            </div>

            {/* Experience */}
            <div className="cv-section">
              <SectionTitle>Work Experience</SectionTitle>
              {cv.experience.map((exp, i) => (
                <div key={i} className="exp-block">
                  <div className="exp-header">
                    <span className="exp-job">{exp.title}</span>
                    <span className="exp-date">{exp.period}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="exp-bullet">
                        <span className="exp-bullet-mark">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="cv-section">
              <SectionTitle>Education</SectionTitle>
              {cv.education.map((edu, i) => (
                <div key={i} className="edu-block">
                  <div className="edu-header">
                    <span className="edu-degree">{edu.degree}</span>
                    <span className="edu-date">{edu.period}</span>
                  </div>
                  <div className="edu-inst">{edu.institution}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="cv-section">
              <SectionTitle>Technical Skills</SectionTitle>
              {cv.skills.map((s, i) => (
                <div key={i} className="skill-row">
                  <span className="skill-label">{s.label}</span>
                  <span className="skill-val">{s.value}</span>
                </div>
              ))}
            </div>

            {/* ── Page 2 on print ── */}
            <div className="print-break">
              <div className="p2-mini">
                <span className="p2-name">{cv.name}</span>
                <span className="p2-label">Projects</span>
              </div>
            </div>

            {/* Projects */}
            <div className="cv-section">
              <SectionTitle>Projects</SectionTitle>
              <div className="proj-grid">
                {cv.projects.map((proj, i) => (
                  <div key={i} className="proj-block">
                    <div className="proj-header">
                      <span className="proj-title">{proj.title}</span>
                      <span className="proj-cat">{proj.category}</span>
                    </div>
                    <p className="proj-desc">{proj.description}</p>
                    <div className="proj-tech">
                      <span className="proj-tech-label">Tech: </span>
                      {proj.tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
