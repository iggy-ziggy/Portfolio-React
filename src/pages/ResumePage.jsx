import ResumeDownload from "../components/ResumeDownload";
import Skills from "../components/Skills";

export default function ResumePage() {
  return (
    <>
      <ResumeDownload />
      {/* <div className='block block--dark block--skewed'>
                <p>
                    I love a challenge. The chance to tackle problems and see them wrestled to the ground is exhilarating. And, occasionally, heartbreaking. Seeing a piece languish in non-functionality is like seeing a friend in need. I just want to help.
                </p>
            </div> */}
      <div className="media block block--dark block--skewed">
        <div className="media--content container container grid grid--1x2">
            <div className="media__image icon--vertical-align">
            <i className="fa-regular fa-lightbulb"></i>
            </div>
          <div className="media__body skills__text teal-text">
            <p>
              I love a challenge. The chance to tackle problems and see them
              wrestled to the ground is exhilarating. And, occasionally,
              heartbreaking. Seeing a piece languish in non-functionality is
              like seeing a friend in need. I just want to help.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}
