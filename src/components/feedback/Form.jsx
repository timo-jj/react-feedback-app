import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import Card from './Card';
import Button from './Button';
import Rating from './Rating';

function Form() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const handleChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setBtnDisabled(true);
      setRating(10);
      setText('');
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <Rating select={setRating} selected={rating} />

        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default Form;
