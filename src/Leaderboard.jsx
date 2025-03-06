export default function Leaderboard() {
  return (
    <html lang="ar" dir="rtl">
      <div className="leaderboard-container">
        <div className="container">
          <div className="title">
            <p>Course Name Shown Here</p>
            <h3>Leaderboard</h3>
          </div>
          <div className="message-container">
            <div className="message">
              <p>
                عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة..
                كمّل . عايز أشوف اسمك في الليدر بورد هنا
              </p>
            </div>
            <div className="emoji">💪</div>
          </div>
          <div className="leaderboard">
            <div className="entry"></div>
            <div className="entry"></div>
            <div className="entry"></div>
            <div className="entry"></div>
            <div className="entry"></div>
          </div>
        </div>
      </div>
    </html>
  );
}
