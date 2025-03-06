export default function Topic() {
  const courseDetails = [
    {
      introduction: "Introduction to the course",
      course: "Course overview",
      exercie: "Exercise details",
      code: "Code examples",
      embedding: "Embedding techniques",
    },
    {
      introduction: "Introduction to the course",
      course: "Course overview ",
      exercie: "Exercise details",
      code: "Code examples",
      embedding: "Embedding techniques",
    },
    {
      introduction: "Introduction to the course",
      course: "Course overview",
      exercie: "Exercise details",
      code: "Code examples",
      embedding: "Embedding techniques",
    },
  ];
  const openExamPopup = () => {
    const examPopup = document.querySelector(".exam-container");
    const page = document.querySelector(".CoursePage");
    examPopup.classList.remove("hide");
    page.classList.add("hide");
    const closeExamPopup = document.querySelector(".close");
    closeExamPopup.addEventListener("click", () => {
      examPopup.classList.add("hide");
      page.classList.remove("hide");
    });
  };

  return (
    <>
      <div className="ProgressDetail"></div>
      {courseDetails.map((info, i) => (
        <div key={i} className="courseDetails">
          <h3 id="numberOfWeeks">Week 4-5</h3>
          <p id="courseDescription">
            Advanced story telling techniques for writers:<br></br>Personas,
            Characters & Plots
          </p>

          <div className="divElement">
            <div id="infor">
              <img className="icons" src="../src/api/file.png" />
              {info.introduction}
            </div>
            <div id="infor">
              <img className="icons" src="../src/api/password.png" />
            </div>
          </div>
          <div className="divElement">
            <div id="infor">
              <img className="icons" src="../src/api/file.png" />
              {info.course}
            </div>
            <div id="infor">
              <img className="icons" src="../src/api/password.png" />
            </div>
          </div>
          <div className="divElement" onClick={openExamPopup}>
            <div id="infor">
              <img className="icons" src="../src/api/file.png" />
              {info.course}
            </div>
            <div className="info-block">
              <div id="qt">0 QUESTION</div>
              <div id="time">10 MINUTES</div>
            </div>
          </div>
          <div className="divElement">
            <div id="infor">
              <img className="icons" src="../src/api/file.png" />
              {info.exercie}
            </div>
            <div id="infor">
              <img className="icons" src="../src/api/password.png" />
            </div>
          </div>
          <div className="divElement">
            <div id="infor">
              <img className="icons" src="../src/api/file.png" />
              {info.code}
            </div>
            <div id="infor">
              <img className="icons" src="../src/api/password.png" />
            </div>
          </div>
          <div className="divElement">
            <div id="infor">
              <img className="icons" src="../src/api/file.png" />
              {info.embedding}
            </div>
            <div id="infor">
              <img className="icons" src="../src/api/password.png" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
