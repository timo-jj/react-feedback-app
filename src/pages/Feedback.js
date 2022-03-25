import '../styles/feedback.scss';

import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FeedbackProvider } from '../context/FeedbackContext';
import Header from '../components/feedback/Header';
import FeedbackList from '../components/feedback/FeedbackList';
import FeedbackStats from '../components/feedback/FeedbackStats';
import Form from '../components/feedback/Form';

function Feedback() {
  return (
    <FeedbackProvider>
      <main>
        <Header text="Feedback UI" />

        <div className="container">
          <Form />
          <FeedbackStats />
          <FeedbackList />

          <div className="about-link">
            <Link to={'/about'}>
              <FaQuestion />
            </Link>
          </div>
        </div>
      </main>
    </FeedbackProvider>
  );
}

export default Feedback;
