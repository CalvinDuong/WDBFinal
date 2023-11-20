import React from 'react';
import './forecast.css';

function ForeCast() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="forecast-container">
      {days.map(day => (
        <DayOfWeek key={day} day={day} />
      ))}
    </div>
  );
}

function DayOfWeek({ day }) {
  return (
    <div className="day-info">
      <h2>{day}</h2>
    </div>
  );
}

export default ForeCast;