import Card from '../components/feedback/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="container">
      <Card>
        <h1>This is a bout page</h1>
        <p>lorem ipsum dolor sit amet, con</p>

        <Link to={'/'} style={{ display: 'block' }}>
          Back To Home
        </Link>
        <Link to={'/post/1b2er5/the-post-title'}>Post</Link>
      </Card>
    </main>
  );
}

export default About;
