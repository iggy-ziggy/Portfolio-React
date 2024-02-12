import Resume from "../lib/MatthewHaynesResume.pdf.pdf";

export default function DownloadResume() {
  return (
    <div className="resume__btn-container">
      <a
        href={Resume}
        download="MatthewHaynesResume"
        target="blank"
        rel="noreferrer"
        className="btn resume__download-btn"
      >
        Download Resume
      </a>
    </div>
  );
}


// NOTES:
  // alternative method, if we need to go back to it for some reason...
  // export default function DownloadResume() {
  // const onButtonClick = () => {
  //     // using Java Script method to get PDF file
  //     fetch("matthew-haynes-resume.pdf").then((response) => {
  //       response.blob().then((blob) => {
  //         // Creating new object of PDF file
  //         const fileURL = window.URL.createObjectURL(blob);
  //         // Setting various property values
  //         let alink = document.createElement("a");
  //         alink.href = fileURL;
  //         alink.download = "matthew-haynes-resume.pdf";
  //         alink.click();
  //       });
  //     });
  //   };

  //   return (
  //     <div className="resume__btn-container">
  //         <button
  //           className="btn resume__download-btn"
  //           onClick={onButtonClick}
  //           disabled
  //         >
  //           Download Resume
  //         </button>
  //     </div>
  //   )
  // };