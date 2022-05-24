import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, PageLayout, Card, Profile } from "../../components";
import _ from "lodash";

export const PortofolioIndex = () => {
  const [project, setProject] = useState({
    projects: "",
  });
  const styles = style();

  const fetchProjects = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/projects");
    setProject({
      projects: await response.json(),
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // project?.projects?.projects?.map((project) => console.log(project?.name));

  return (
    <PageLayout>
      <div className={styles.container}>
        <h2 className={styles.header}>Projects</h2>
        <button onClick={() => console.log("asdasd")}>asdasd</button>
        <div className={styles.project}>
          {_.map(project.projects.projects, (project) => {
            return <Card project={project} />;
          })}
          <input type="text"></input>
        </div>
      </div>
    </PageLayout>
  );
};

const style = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
  },
  project: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    flexWrap: "wrap",
  },
  header: {
    textAlign: "center",
  },
});

export default PortofolioIndex;
