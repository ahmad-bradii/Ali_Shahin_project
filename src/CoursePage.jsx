import Materiel from "./Materiel";
import Topic from "./Topic";
import VideoTrailer from "./VideoTrailer";
import Comment from "./Comment";
import Progress from "./Progress";
import Exam from "./Exam";

export default function CoursePage() {
  return (
    <>
      <Exam />
      <div className="CoursePage">
        <VideoTrailer />
        <div className="courseMaterial">
          <h2>Course Material</h2>
          <div className="courseMaterialContent">
            <Materiel />
          </div>
        </div>
        <div className="forTopic">
          <Progress />
          <Topic />
        </div>
        <div className="courseComments">
          <h2>Comments</h2>
          <Comment />
        </div>
      </div>
    </>
  );
}
