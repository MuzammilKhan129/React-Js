import "./App.css";

export default function App() {
  return (
    <div>
      <Tipcalculator />
    </div>
  );
}

function Tipcalculator() {
  return (
    <div>
      <Billinput />
      <ServiceRating>How did you like the service?</ServiceRating>
      <ServiceRating>How did your friend like the service?</ServiceRating>
      <Output />
      <Reset />
    </div>
  );
}

function Billinput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill Value"></input>
    </div>
  );
}

function ServiceRating({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h3>You pay X ($A + $B)</h3>;
}

function Reset() {}
