import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({
  name,
  location,
  image,
  website,
  created_at,
  last_update,
}) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>location</th>
          <td>{location}</td>
        </tr>
        <tr>
          <th>image</th>
          <td>
            <img src={image} alt="user profile image" width={100} />
          </td>
        </tr>
        <tr>
          <th>website</th>
          <td>{website}</td>
        </tr>
        <tr>
          <th>created_at</th>
          <td>{created_at}</td>
        </tr>
        <tr>
          <th>last_update</th>
          <td>{last_update}</td>
        </tr>
      </table>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/mrakbari9`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <GithubUser
      name={data.name}
      location={data.location}
      image={data.avatar_url}
      website={data.blog}
      created_at={data.created_at}
      last_update={data.updated_at}
    />
  );
}

export default App;
