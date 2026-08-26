import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <div className="navbar__inner">
          <a href="#home" className="navbar__brand">
            Alex Morgan
          </a>

          <nav className="navbar__links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <a href="#contact" className="navbar__cta">
              Let's Talk
            </a>
          </nav>

          <button
            className="navbar__menu"
            type="button"
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main id="home">
        {/* Hero */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__content">
              <p className="hero__eyebrow">FRONT-END DEVELOPER</p>

              <h1 className="hero__title">
                Building modern digital experiences.
              </h1>

              <p className="hero__text">
                I create responsive and user-focused digital experiences with
                modern front-end technologies.
              </p>

              <div className="hero__actions">
                <a href="#projects" className="button button--primary">
                  View Projects
                </a>

                <a href="#contact" className="button button--secondary">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero__card">
              <div className="hero__glow"></div>

              <img
                src="/alex-morgan.png"
                alt="Alex Morgan"
                className="hero__image"
              />

              <div className="hero__profile">
                <h2>Alex Morgan</h2>
                <p>Front-End Developer</p>

                <span>
                  <i></i>
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <div className="about__inner">
            <div className="about__card">
              <p className="section-label">ABOUT ME</p>

              <div className="about__layout">
                <div className="about__image-wrap">
                  <img
                    src="/alex-morgan.png"
                    alt="Alex Morgan"
                    className="about__image"
                  />
                </div>

                <div className="about__content">
                  <h2>
                    A developer focused on clean and useful digital experiences.
                  </h2>

                  <p>
                    I'm a front-end developer with a strong interest in modern
                    interfaces, responsive design and digital products.
                  </p>

                  <p>
                    I enjoy turning ideas into clear and accessible experiences,
                    with a focus on maintainable code and thoughtful design.
                  </p>

                  <div className="about__topics">
                    <span>Frontend Development</span>
                    <span>Responsive Design</span>
                    <span>UI Implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="skills" id="skills">
          <div className="skills__inner">
            <div className="skills__card">
              <p className="section-label">SKILLS</p>

              <h2>Technologies I work with</h2>

              <p className="skills__intro">
                Here are the technologies and tools I use to build modern,
                responsive and accessible digital experiences.
              </p>

              <div className="skills__grid">
                <article className="skill-card">
                  <img src="/icons/html5.svg" alt="" />
                  <h3>HTML</h3>
                  <p>Markup Language</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/css3.svg" alt="" />
                  <h3>CSS</h3>
                  <p>Styling &amp; Layout</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/javascript.svg" alt="" />
                  <h3>JavaScript</h3>
                  <p>Web Development</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/react.svg" alt="" />
                  <h3>React</h3>
                  <p>UI Library</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/github.svg" alt="" />
                  <h3>GitHub</h3>
                  <p>Code Hosting</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/git.svg" alt="" />
                  <h3>Git</h3>
                  <p>Version Control</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/figma.svg" alt="" />
                  <h3>Figma</h3>
                  <p>UI / UX Design</p>
                </article>

                <article className="skill-card">
                  <img src="/icons/sanity.svg" alt="" />
                  <h3>Sanity</h3>
                  <p>Content Platform</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="projects" id="projects">
          <div className="projects__inner">
            <p className="section-label">PROJECTS</p>

            <h2>Selected projects</h2>

            <p className="projects__intro">
              A selection of projects focused on responsive interfaces,
              usability and modern front-end development.
            </p>

            <div className="projects__grid">
              <article className="project-card">
                <img
                  src="/projects/travelio.jpg"
                  alt="Travelio project preview"
                  className="project-card__image"
                />

                <h3>Travelio</h3>

                <p>
                  A responsive travel platform designed to help users discover
                  destinations and plan their next adventure.
                </p>

                <div className="project-card__tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="project-card__links">
                  <a href="#" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </article>

              <article className="project-card">
                <img
                  src="/projects/taskflow.jpg"
                  alt="TaskFlow project preview"
                  className="project-card__image"
                />

                <h3>TaskFlow</h3>

                <p>
                  A productivity dashboard for organising tasks, tracking
                  progress and managing daily workflows.
                </p>

                <div className="project-card__tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>

                <div className="project-card__links">
                  <a href="#" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </article>

              <article className="project-card">
                <img
                  src="/projects/shopsphere.jpg"
                  alt="ShopSphere project preview"
                  className="project-card__image"
                />

                <h3>ShopSphere</h3>

                <p>
                  A modern e-commerce interface focused on clear product
                  discovery and a smooth shopping experience.
                </p>

                <div className="project-card__tags">
                  <span>React</span>
                  <span>Sanity</span>
                  <span>CSS</span>
                </div>

                <div className="project-card__links">
                  <a href="#" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div className="contact__inner">
            <div className="contact__card">
              <div className="contact__content">
                <p className="section-label">CONTACT</p>

                <h2>Let's work together</h2>

                <p className="contact__intro">
                  I'm open to new opportunities, collaborations and interesting
                  digital projects.
                </p>

                <div className="contact__links">
                  <a href="mailto:alex.morgan@example.com">
                    <span>Email</span>
                    <strong>→</strong>
                    alex.morgan@example.com
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <strong>→</strong>
                    github.com/alexmorgan
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                    <strong>→</strong>
                    linkedin.com/in/alexmorgan
                  </a>
                </div>
              </div>

              <aside className="contact__availability">
                <h3>AVAILABLE FOR WORK</h3>

                <strong>Have a project in mind?</strong>

                <p>
                  I'm currently available for freelance work and new
                  opportunities.
                </p>

                <a
                  href="mailto:alex.morgan@example.com"
                  className="button button--primary"
                >
                  Let's Talk
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <p>© 2026 Alex Morgan</p>
          <p>Built with React &amp; Sanity</p>
        </div>
      </footer>
    </div>
  );
}

export default App;