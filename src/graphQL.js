// api data from graphql

import "./App.css";
import { useState, useEffect } from "react";

const query = `
query{
  allLifts{
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "post",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <table>
        <tr>
          <td>{name}</td>
          <td>{elevationGain}</td>
          <td>{status}</td>
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
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;
