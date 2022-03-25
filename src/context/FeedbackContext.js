import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`/feedback/${id}`);
      fetchFeedback();
    }
  };

  const addFeedback = async (newFeedback) => {
    const post = await axios.post('/feedback', newFeedback);

    setFeedback([post.data, ...feedback]);
    fetchFeedback();
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    const updated = await axios.put(`/feedback/${id}`, updItem);

    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updated,
            }
          : item
      )
    );

    fetchFeedback();
  };

  const fetchFeedback = async () => {
    const response = await axios.get('/feedback');

    setIsLoading(false);
    setFeedback(response.data);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
