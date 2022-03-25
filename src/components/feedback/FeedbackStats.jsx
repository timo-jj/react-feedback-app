import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const averageRating =
    feedback.reduce((acc, current) => acc + current.rating, 0) /
    feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating: {isNaN(averageRating) ? '0' : averageRating.toFixed(2)}
      </h4>
    </div>
  );
}

export default FeedbackStats;
