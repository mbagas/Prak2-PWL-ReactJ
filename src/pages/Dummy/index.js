import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";
import { Card, PageLayout } from "../../components";

export const Dummy = () => {
  const styles = style();
  const [project, setProject] = useState({
    projects: "",
  });
  const fetchProjects = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/projects");
    setProject({
      projects: await response.json(),
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <PageLayout>
      <div>
        <h1>Dummy</h1>
        <p>This is a dummy page</p>
        <a href="asd">asda</a>
        <button>asd</button>
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

export default Dummy;
