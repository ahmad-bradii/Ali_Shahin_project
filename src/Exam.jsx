export default function Exam() {
  return (
    <div className="exam-container hide">
      <div className="container">
        <div className="timer">09:30</div>
        <div className="close">X</div>
        <div className="pages">
          <div className="page-number">1</div>
          <div className="page-number">2</div>
          <div className="page-number">3</div>
          <div className="page-number">4</div>
          <div className="page-number">5</div>
        </div>

        <div className="message-container">
          <div className="message">
            <strong>
              1.
              <br />
              Among the following status of India, which one has the oldest rock
              formations in the country?
            </strong>
          </div>
          <div className="leaderboard">
            <div className="entry">
              <input type="checkbox" name="" id="box" />
              <p id="box-p">Asam</p>
            </div>

            <div className="entry">
              <input type="checkbox" name="" id="box" />
              <p id="box-p">Bahar</p>
            </div>

            <div className="entry">
              <input type="checkbox" name="" id="box" />
              <p id="box-p">Kamaltake</p>
            </div>

            <div className="entry">
              <input type="checkbox" name="" id="box" />
              <p id="box-p">Utter Pardesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
