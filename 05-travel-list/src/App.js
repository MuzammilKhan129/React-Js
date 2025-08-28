export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PacingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your 😍 trip?</h3>
    </div>
  );
}

function PacingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em> you have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
