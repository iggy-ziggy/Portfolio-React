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
              Developer / Artist / Night Owl
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
                <div className="media__image box__box">
                    <div className="box"></div>
                </div>
                <div className="media__body">
                  <h3 className="media__title">A Little About Me</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sit pariatur tenetur recusandae blanditiis. Laboriosam ipsum voluptatem iusto? Veniam itaque totam expedita numquam, ab ad sapiente consequatur eum labore assumenda rerum reprehenderit a, laborum omnis vitae saepe quia nostrum consectetur culpa cum in. Dolore numquam deserunt enim adipisci magnam reiciendis!
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