import { Link } from 'react-router-dom';
import Card from '../components/feedback/Card';

function NotFound() {
  return (
    <main className="container">
      <Card>
        <h1>NotFound</h1>
        <Link to={'/'}>Home</Link>
      </Card>
    </main>
  );
}

export default NotFound;
