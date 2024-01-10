export default function HomePage() {
    return (
        <div>
            {/* <!-- Hero --> */}
    <section className="block hero hero--container">
        <div className="container ">
          <header className="hero--header">
            <h1 className="hero--heading">Matthew Haynes</h1>
            <h2 className="hero--subtitle">
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
      {/* <!-- Skills --> */}
      <div className="media block block--dark block--skewed skills close-gap">
        <div className="media--content container grid grid--1x2">
            <div className="media__body">
              <h3 className="media__title">Skills</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora
                recusandae modi iste dolor quam nostrum ad soluta magni perferendis.
              </p>
            </div>
            <div className="media__image box__box">
                <div className="box"></div>
            </div>
        </div>
      </div>
        </div>
    )
}