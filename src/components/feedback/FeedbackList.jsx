import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from '../../assets/spinner.gif';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h3>No feedback yet</h3>;
  }

  return isLoading ? (
    <div style={{ textAlign: 'center' }}>
      <h3>...Loading</h3>
      <img
        src={Spinner}
        alt="loading spinner"
        style={{ maxWidth: '100px', margin: '40px auto 0', display: 'block' }}
      />
    </div>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
