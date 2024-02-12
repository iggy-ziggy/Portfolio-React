import Tech from '../components/Tech';

export default function HomePage() {
    return (
        <div>
            {/* <!-- Hero --> */}
    <section className="block hero hero--container">
        <div className="container ">
          <header className="hero--header">
            <h1 data-aos="fade-right" data-aos-duration="1000" className="hero--heading">Matthew Haynes</h1>
            <h2 data-aos="fade-left" data-aos-duration="1000" className="hero--subtitle">
              Developer / Artist / Avid Learner
            </h2>
          </header>
          {/* <img
        className="hero__image"
        src="./src/assets/images/moon.png"
      ></img> */}
        </div>
      </section>
      {/* <!-- Media - about me --> */}
      <section data-aos="fade-up" data-aos-duration="1000">
          <div className="media block block--dark block--skewed about__me close-gap">
            <div className="media--content container grid grid--1x2">
                <div className="media__image">
                    {/* <div className="box"></div> */}
                    <img src="./src/assets/images/portfolio-self.png" alt="" />
                </div>
                <div className="media__body">
                  <h3 className="media__title">A Little About Me</h3>
                  <p>
                    As a developer and artist, I approach code with the same passion I do my painting. For me, they both stem from the same place: the need to explore. Every keystroke, every brushstroke, holds the same possibility: is this what makes it? Is this what breaks it? The desire to create and problem-solve is what gets me up each morning.
                  </p>
                  <p>
                    The moment a process starts working comfortably, I begin looking for ways to improve it. There is nothing that works so well that it cannot be improved upon.
                  </p>
                </div>
            </div>
          </div>
      </section>
      {/* <!-- Skills --> */}
      <section data-aos="fade-up" data-aos-duration="1000">
          <div className="media block block--dark block--skewed tech close-gap">
            <div className="media--content container grid grid--1x2">
                  <h3 className="media__title">Tech</h3>
                  <Tech />
            </div>
          </div>
      </section>
        </div>
    )
}