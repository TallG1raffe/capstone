import React from 'react';
import './Card.css';

export function Card({ feedbacks }) {
  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.feedback_id}>
            <strong>Employee Name:</strong> {feedback.employee_name} <br />
            <strong>Department:</strong> {feedback.department} <br />
            <strong>Feedback:</strong> {feedback.feedback} <br />
            <strong>Sentiment:</strong> {feedback.sentiment}
          </li>
        ))}
      </ul>
    </div>
  );
}