import React, { useState } from "react";

function Skill() {
  const [skills] = useState({
    Frontend: [
      "React",
      "Vue",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Ant Design",
      "Vuetify",
    ],
    Backend: [".NET 9", "Node.js", "Go", "Python"],
    Database: ["SQL Server", "PostgreSQL"],
    "DevOps & Tools": [
      "Docker",
      "Git",
      "CI/CD",
      "Azure Functions",
      "Blob Storage",
    ],
    Testing: ["MSTest"],
  });

  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills</h1>
      {Object.entries(skills).map(([category, categorySkills]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {categorySkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skill;
