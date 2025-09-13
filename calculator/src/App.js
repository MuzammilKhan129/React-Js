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
      <ServiceRating />
      <ServiceRating />
      <Output />
      <Reset />
    </div>
  );
}

function Billinput() {
  return (
    <div>
      How much was the bill?
      <input type="text"></input>
    </div>
  );
}

function ServiceRating() {
  return (
    <div>
      How did you like the service?
      <select>
        <option>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output() {}

function Reset() {}
