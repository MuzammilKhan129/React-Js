import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFDB1D",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginer",
    color: "#FF3B00",
  },
];

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginer" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
