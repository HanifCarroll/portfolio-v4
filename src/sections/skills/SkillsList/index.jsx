import React from "react";
import styles from "./styles.module.scss";

const languages = ["HTML", "CSS", "JavaScript", "Java", "Python", "Node.js"];

const frameworks = [
  "React.js",
  "Redux",
  "React Native",
  "Django",
  "Spring Boot",
  "Hibernate",
  "jQuery"
];

const other = ["Git", "REST", "AJAX", "Jira"];

const renderList = (heading, list) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.heading}>{heading}</h3>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const renderLists = () => {
  return (
    <div className={styles.notes}>
      {renderList("Languages", languages)}
      {renderList("Frameworks", frameworks)}
      {renderList("Other", other)}
    </div>
  );
};

export const SkillsList = () => {
  return <div className={styles.container}>{renderLists()}</div>;
};
