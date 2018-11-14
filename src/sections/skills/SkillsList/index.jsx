import React from "react";
import styles from "./styles.module.scss";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Redux",
  "React Native",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "Hibernate",
  "Python",
  "Django",
  "jQuery",
  "Git",
  "REST",
  "AJAX",
  "Jira",
];

export const SkillsList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
