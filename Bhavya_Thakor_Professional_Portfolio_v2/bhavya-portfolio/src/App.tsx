import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X, ExternalLink, BookOpen, FlaskConical, Award, Sparkles, Mail, MapPin } from 'lucide-react'
import SectionHeading from './components/SectionHeading'
import { profile, projects, research, publications, recognition, interests } from './data/portfolio'

const nav = [
  ['Work', '#work'], ['Research', '#research'], ['Writing', '#writing'],
  ['Recognition', '#recognition'], ['About', '#about'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Space research', 'Technology']
  const visibleProjects = projects.filter((project) => {
    if (filter === 'All') return true
    return project.category.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Bhavya Thakor home">
          <span className="wordmark__monogram">BT</span>
          <span>BHAVYA THAKOR</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="topbar-contact" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <nav className="mobile-nav">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="hero-content">
            <div className="hero-kicker"><span className="status-dot" /> PORTFOLIO / 2026</div>
            <p className="hero-role">{profile.role}</p>
            <h1>{profile.headline}</h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button--light" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="text-link text-link--light" href="#about">A little about me <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="hero-index">01 <span>/ 05</span></div>
            <div className="hero-aside-rule" />
            <p>RESEARCH<br />TECHNOLOGY<br />CREATIVE WORK</p>
            <div className="hero-coordinate">A CURIOUS MIND.<br />A WORK IN PROGRESS.</div>
          </div>
          <a href="#work" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-strip">
          <span className="strip-label">CURRENT FOCUS</span>
          <p>Building ideas across <strong>research</strong>, <strong>technology</strong> and <strong>creative expression.</strong></p>
          <span className="strip-mark">✳</span>
        </section>

        <section className="section work-section" id="work">
          <div className="section-topline"><span>SELECTED WORK</span><span>2026 — PRESENT</span></div>
          <SectionHeading eyebrow="01 / Projects" title="Ideas, developed into work." description="A selection of ongoing projects shaped by research, experimentation and collaboration." number="02" />
          <div className="filter-row" aria-label="Filter projects">
            {categories.map((item) => <button key={item} className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <div className="project-list">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card__number">{project.number}</div>
                <div className="project-card__main">
                  <div className="project-meta"><span>{project.category}</span><span className="project-status"><i /> {project.status}</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-detail">{project.detail}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="founder-line"><span className="founder-icon">↗</span><span>{project.partnership}</span></div>
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a>
                </div>
                <div className={`project-art project-art--${project.id}`}>
                  {project.id === 'paradigm-shift' ? <div className="orbital-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet" /><span className="art-caption">EARTH<br />ANALOGUES</span><span className="art-coordinate">FIELD NOTES / 01</span></div> :
                    <div className="bridge-art"><div className="bridge-circle">V<span>AI</span></div><div className="bridge-lines" /><span className="art-caption">LANGUAGE<br />MEETS ACCESS</span><span className="art-coordinate">SYSTEMS / 02</span></div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="research">
          <div className="section section--compact">
            <div className="section-topline"><span>QUESTIONS & INQUIRY</span><span>RESEARCH NOTES</span></div>
            <SectionHeading eyebrow="02 / Research" title="Following the questions further." description="Research themes connected to my ongoing projects. These are works in progress, not claims of completed scientific findings." number="03" />
            <div className="research-grid">
              {research.map((item, i) => (
                <article className="research-card" key={item.id}>
                  <div className="research-card__top"><span>0{i + 1}</span><FlaskConical size={19} /></div>
                  <h3>{item.title}</h3>
                  <span className="research-context">{item.context}</span>
                  <p>{item.description}</p>
                  <div className="research-foot"><span>{item.status}</span><span className="mini-arrow">↗</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section writing-section" id="writing">
          <div className="section-topline"><span>WORDS & IDEAS</span><span>PUBLICATION</span></div>
          <SectionHeading eyebrow="03 / Writing" title="Stories have their own way of finding meaning." description="A place for published writing and creative work." number="04" />
          <div className="publication-card">
            <div className="publication-cover"><div className="cover-top">A STORY BY BHAVYA THAKOR</div><div className="cover-title">drifted</div><div className="cover-subtitle">from lost to self-directed</div><div className="cover-bottom">FICTION / WRITING</div></div>
            <div className="publication-copy">
              <span className="eyebrow">BOOK / ONLINE PUBLICATION</span>
              <h3>Drifted</h3>
              <p>A book by Bhavya Thakor, published on Wattpad.</p>
              <div className="publication-meta"><span><BookOpen size={15} /> Writing</span><span>Published online</span></div>
              <a className="button button--dark" href={publications[0].url} target="_blank" rel="noreferrer">{publications[0].linkLabel} <ExternalLink size={15} /></a>
            </div>
            <div className="publication-index">01 <span> / PUBLICATION</span></div>
          </div>
        </section>

        <section className="recognition-section" id="recognition">
          <div className="section section--compact">
            <div className="section-topline"><span>RECOGNITION & CREDENTIALS</span><span>VERIFIED DETAILS ONLY</span></div>
            <SectionHeading eyebrow="04 / Recognition" title="Milestones along the way." description="Certificates and recognition associated with project participation. Issuer details can be added when confirmed from the original documents." number="05" />
            <div className="recognition-list">
              {recognition.map((item, i) => <article className="recognition-item" key={item.id}>
                <div className="recognition-icon"><Award size={19} /></div>
                <div className="recognition-main"><span>0{i + 1} / CERTIFICATE</span><h3>{item.title}</h3><p>{item.context}</p><small>{item.detail}</small></div>
                <span className="recognition-state">RECEIVED</span>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-topline"><span>BEYOND THE PROJECTS</span><span>ABOUT</span></div>
          <div className="about-grid">
            <div><SectionHeading eyebrow="05 / About" title="Curiosity is a practice." description="A little about the person behind the work." number="06" /></div>
            <div className="about-copy">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="interests-grid">{interests.map((interest) => <div className="interest" key={interest.title}><Sparkles size={16} /><div><h4>{interest.title}</h4><p>{interest.detail}</p></div></div>)}</div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <span className="eyebrow">OPEN TO MEANINGFUL CONNECTIONS</span>
            <h2>Have an idea worth exploring?</h2>
            <p>I welcome thoughtful conversations, research opportunities and creative collaborations.</p>
            {profile.email ? <a className="button button--light" href={`mailto:${profile.email}`}>Start a conversation <Mail size={16} /></a> : <span className="contact-note">Contact details will be added here.</span>}
            {profile.location && <span className="location-line"><MapPin size={14} /> {profile.location}</span>}
          </div>
          <div className="contact-stamp">LET'S<br />CONNECT<span>↗</span></div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark wordmark--footer" href="#top"><span className="wordmark__monogram">BT</span><span>BHAVYA THAKOR</span></a>
        <span>© 2026 · A PERSONAL PORTFOLIO</span>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App