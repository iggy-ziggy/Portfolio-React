export default function DownloadResume() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("matthew-haynes-resume.pdf").then((response) => {
          response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "matthew-haynes-resume.pdf";
            alink.click();
          });
        });
      };

      return (
        <button
          className="rounded-pill btn-warning resume-btn"
          onClick={onButtonClick}
        >
          Download Resume
        </button>
      )
}