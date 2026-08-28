import { useEffect, useState } from "react";
import "./App.css";
import { client, urlFor } from "./sanityClient";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [content, setContent] = useState({
    hero: null,
    about: null,
    skills: [],
    projects: [],
    contact: null,
  });

  useEffect(() => {
    const query = `{
    "hero": *[_type == "hero"][0]{
  eyebrow,
  title,
  description,
  name,
  role,
  availability,
  "imageUrl": image.asset->url
},

      "about": *[_type == "about"][0]{
        label,
        title,
        paragraphOne,
        paragraphTwo,
        topics,
        image
      },

      "skills": *[_type == "skill"] | order(order asc){
        _id,
        name,
        category,
        icon,
        order
      },

      "projects": *[_type == "project"] | order(order asc){
        _id,
        title,
        description,
        image,
        technologies,
        liveUrl,
        githubUrl,
        order
      },

      "contact": *[_type == "contact"][0]{
        label,
        title,
        description,
        email,
        github,
        linkedin,
        availabilityTitle,
        availabilitySubtitle,
        availabilityText
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.error("Error loading Sanity content:", error);
      });
  }, []);

  const { hero, about, skills, projects, contact } = content;

  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <div className="navbar__inner">
          <a href="#home" className="navbar__brand">
            {hero?.name || "Alex Morgan"}
          </a>

          <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              className="navbar__cta"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>

          <button
            className="navbar__menu"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
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
              <p className="hero__eyebrow">{hero?.eyebrow}</p>

              <h1 className="hero__title">{hero?.title}</h1>

              <p className="hero__text">{hero?.description}</p>

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
              {hero?.imageUrl && (
                <img
                  src={hero.imageUrl}
                  alt={hero?.name || "Alex Morgan"}
                  className="hero__image"
                />
              )}

              <div className="hero__profile">
                <h2>{hero?.name}</h2>
                <p>{hero?.role}</p>

                <span>
                  <i></i>
                  {hero?.availability}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <div className="about__inner">
            <div className="about__card">
              <p className="section-label">{about?.label}</p>

              <div className="about__layout">
                <div className="about__image-wrap">
                  {about?.image && (
                    <img
                      src={urlFor(about.image).width(800).url()}
                      alt={hero?.name || "Profile"}
                      className="about__image"
                    />
                  )}
                </div>

                <div className="about__content">
                  <h2>{about?.title}</h2>

                  <p>{about?.paragraphOne}</p>

                  <p>{about?.paragraphTwo}</p>

                  <div className="about__topics">
                    {about?.topics?.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
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
                {skills.map((skill) => (
                  <article className="skill-card" key={skill._id}>
                    {skill.icon && (
                      <img
                        src={urlFor(skill.icon).width(100).height(100).url()}
                        alt={`${skill.name} icon`}
                      />
                    )}

                    <h3>{skill.name}</h3>
                    <p>{skill.category}</p>
                  </article>
                ))}
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
              {projects.map((project) => (
                <article className="project-card" key={project._id}>
                  {project.image && (
                    <img
                      src={urlFor(project.image).width(800).height(450).url()}
                      alt={`${project.title} project preview`}
                      className="project-card__image"
                    />
                  )}

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-card__tags">
                    {project.technologies?.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="project-card__links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div className="contact__inner">
            <div className="contact__card">
              <div className="contact__content">
                <p className="section-label">{contact?.label}</p>

                <h2>{contact?.title}</h2>

                <p className="contact__intro">{contact?.description}</p>

                <div className="contact__links">
                  {contact?.email && (
                    <a href={`mailto:${contact.email}`}>
                      <span>Email</span>
                      <strong>→</strong>
                      {contact.email}
                    </a>
                  )}

                  {contact?.github && (
                    <div className="contact__info">
                      <span>GitHub</span>
                      <strong>→</strong>
                      {contact.github}
                    </div>
                  )}

                  {contact?.linkedin && (
                    <div className="contact__info">
                      <span>LinkedIn</span>
                      <strong>→</strong>
                      {contact.linkedin}
                    </div>
                  )}
                </div>
              </div>

              <aside className="contact__availability">
                <h3>{contact?.availabilityTitle}</h3>

                <strong>{contact?.availabilitySubtitle}</strong>

                <p>{contact?.availabilityText}</p>

                {contact?.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="button button--primary"
                  >
                    Let's Talk
                  </a>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <p>© 2026 {hero?.name || "Alex Morgan"}</p>
          <p>Built with React &amp; Sanity</p>
        </div>
      </footer>
    </div>
  );
}

export default App;