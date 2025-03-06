import { useState } from "react";

function Progress() {
  const [progress, setProgress] = useState(76); // Assuming 63% is the progress
  const maxProgress = 100; // Define the maximum progress value
  const percentage = (progress / maxProgress) * 100;

  return (
    <div className="progress-container">
      <h2>Topics for This Course</h2>
      <div className="progress-bar-bg">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
        <div
          className="progress-indicator"
          style={{ left: `calc(${percentage}% - 15px)` }} // Adjust 15px based on indicator width
        >
          <div className="indicator-circle">
            <span className="indicator-you">You</span>
          </div>
          <div className="indicator-arrow"></div>
          <div className="progress-percentage">{percentage}%</div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
