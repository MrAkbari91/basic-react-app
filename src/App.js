import "./App.css";

const tahoe_peaks = [
  { name: "Freed", elevation: 123456 },
  { name: "Monument", elevation: 48558 },
  { name: "no data", elevation: 95482 },
  { name: "demo", elevation: 98435 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}> {renderItem(item)} </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>this is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;
