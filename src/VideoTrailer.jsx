function VideoTrailer() {
  return (
    <div className="CourseVideoTrailerContainer">
      <img
        className="CourseVideoTrailer"
        src="../../src/api/image 44.png"
        allow="autoplay;"
        title="Course Video Trailer"
      ></img>
      <div className="socialMediaContainer">
        <img
          className="socialMedia"
          src="../src/api/facebook.png"
          alt="facebook"
        />
        <img
          className="socialMedia"
          src="../src/api/twitter.png"
          alt="twitter"
        />
        <img
          className="socialMedia"
          src="../src/api/linkedin.png"
          alt="linkedin"
        />
        <img
          className="socialMedia"
          src="../src/api/youtube.png"
          alt="youtube"
        />
      </div>
    </div>
  );
}

export default VideoTrailer;
