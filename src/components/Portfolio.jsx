import projects from "../lib/Portfolio";

export default function Portfolio() {
  return (
    <div className="portfolio--container container block">
      <div className="grid grid--1x2">
        {projects.map(function (project, index) {
          return (
            <div
              className="project--card"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
            >
              <div className="image__container">
                <img
                  src={project.image}
                  alt="project image"
                  className="project__image"
                ></img>
              </div>
              <p className="project__title">{project.title}</p>
              <div className="btn--container">
                <a
                  href={project.github}
                  className="project__btn"
                  style={{ margin: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.deploy}
                  className="project__btn"
                  style={{ margin: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
