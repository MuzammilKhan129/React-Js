import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Muhammad Muzammil Ijaz</h1>
      <p>
        Frontend Developer and Tech lover. When I'm not coding, I like to watch
        some football or Cricket. I'm from Arifwala,Punjab(Pakistan) but living
        in BahawalPur(Pakistan).
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="/images/moni.jpg" alt="Muzammil Ijaz" />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="✌" color="lightblue" />
      <Skill skill="HTML+CSS" emoji="🎉" color="orange" />
      <Skill skill="JavaScript" emoji="✔" color="yellow" />
      <Skill skill="Python" emoji="👌" color="lightgrey" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} {props.emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
