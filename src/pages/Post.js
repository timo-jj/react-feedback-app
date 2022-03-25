import { useParams, Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const params = useParams();
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <main class="container">
      <h1>Post ID: {params.id}</h1>
      <p>Post Title: {params.title}</p>

      <button onClick={onClick}>Redirect</button>
    </main>
  );
}

export default Post;
