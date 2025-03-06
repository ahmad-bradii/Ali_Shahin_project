export default function Comment() {
  const commentsList = [
    {
      user: "User1",
      comment: "This course is very informative and well-structured.",
      date: "2023-10-01",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
    },
    {
      user: "User2",
      comment: "I learned a lot from this course. Highly recommend!",
      date: "2023-10-02",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
    },
    {
      user: "User3",
      comment: "Great course with practical examples.",
      date: "2023-10-03",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
    },
  ];
  return (
    <>
      {commentsList.map((info, i) => (
        <div key={i} className="comment">
          <img src={info.image} alt="Student Photo" className="comment-img" />
          <div className="comment-content">
            <h4 className="student-name">{info.user}</h4>
            <p className="comment-date">{info.date}</p>
            <p className="student-comment">{info.comment}</p>
          </div>
        </div>
      ))}
      <div className="comment-container">
        <div className="comment-box">
          <textarea rows="4" placeholder="Write a comment"></textarea>
        </div>
        <button href="#" className="submit-button">
          Submit Review →
        </button>
      </div>
    </>
  );
}
