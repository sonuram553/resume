import React from "react";
import { resumeData } from "./data/resumeData";
import "./App.css";

function App() {
  const {
    header,
    contact,
    careerObjective,
    experience,
    projects,
    technologies,
    education,
    achievements,
    hobbies,
  } = resumeData;

  return (
    <div className="App">
      <header id="main-header">
        <hgroup>
          <h1 id="heading">{header.name}</h1>
          {/* <h2 id="role">{header.role}</h2> */}
        </hgroup>

        <div id="social">
          <a
            href={header.social.github}
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/icons/github.svg" alt="Github" />
          </a>
          <a
            href={header.social.leetcode}
            title="Leetcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/icons/lc.svg" alt="Leetcode" />
          </a>
          <a
            href={header.social.linkedin}
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/icons/linkedin.svg" alt="Linkedin" />
          </a>
        </div>

        <p id="age">{/* Age: {header.age} */}</p>
      </header>

      <main>
        <article id="contact">
          <h2 className="sub-heading">Contact</h2>
          <address className="contact__info">
            <p>
              <i className="fas fa-phone-alt"></i>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              {contact.location}
            </p>
          </address>
        </article>

        <article id="career">
          <h2 className="sub-heading">Career Objective</h2>
          <p>{careerObjective}</p>
        </article>

        <article id="experience">
          <h2 className="sub-heading">
            Experience{" "}
            <small>
              {(
                (new Date().getTime() - new Date("2019-11-01").getTime()) /
                (1000 * 60 * 60 * 24 * 365)
              ).toFixed(1)}{" "}
              yrs
            </small>
          </h2>
          {experience.map((exp, index) => (
            <section key={index} className="experience">
              <header>
                <h3 className="space-between">
                  <span>
                    {exp.role}
                    <span className="company"> @ {exp.company}</span>
                  </span>
                  <span className="duration">
                    <time>{exp.duration.start}</time> - {exp.duration.end}
                  </span>
                </h3>
              </header>
              {exp.description && <p>{exp.description}</p>}
              {exp.achievements && (
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
              {exp.projects &&
                exp.projects.map((project, i) => (
                  <section key={i} className="work">
                    <header className="space-between">
                      <h4 className="work__title">{project.name}</h4>
                      <p className="duration">
                        <time>{project.duration.start}</time> -{" "}
                        <time>{project.duration.end}</time>
                      </p>
                    </header>
                    <p className="work__description">
                      <span className="objective">Objective:</span>{" "}
                      {project.objective}
                    </p>
                    <ul>
                      {project.achievements.map((achievement, j) => (
                        <li key={j}>{achievement}</li>
                      ))}
                    </ul>
                  </section>
                ))}
            </section>
          ))}
        </article>

        <article id="projects">
          <h2 className="sub-heading">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => (
              <li key={index} className="projects__link">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name} <i className="fas fa-link"></i>
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article id="technologies">
          <h2 className="sub-heading">Technologies</h2>
          <ul className="list">
            {technologies.highlighted.map((tech, index) => (
              <li key={index} className="list__item list__item--highlight">
                <strong>{tech}</strong>
              </li>
            ))}
            {technologies.other.map((tech, index) => (
              <li key={index} className="list__item">
                {tech}
              </li>
            ))}
          </ul>
        </article>

        <article id="education" className="education">
          <h2 className="sub-heading">Education</h2>
          <ul className="education__list">
            {education.map((edu, index) => (
              <li key={index}>
                <h3 className="education__title">{edu.degree}</h3>
                <p>
                  <span className="education__year">{edu.year}</span>
                  <strong>{edu.score}</strong>
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article id="achievements">
          <h2 className="sub-heading">Academic Achievements</h2>
          <table>
            <tbody>
              {achievements.map((achievement, index) => (
                <tr key={index}>
                  <td>{achievement.description}</td>
                  <td>{achievement.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article id="hobbies">
          <h2 className="sub-heading">Hobbies</h2>
          <ul className="list">
            {hobbies.map((hobby, index) => (
              <li key={index} className="list__item">
                {hobby}
              </li>
            ))}
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
