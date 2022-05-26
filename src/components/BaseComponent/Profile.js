import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Profile = () => {
  const styles = style();

  const link_ig = "https://www.instagram.com/muksinbagas/";

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>I'm Muksin Bagaskara</h1>
        </div>
        <div className={styles.row}>
          <p>Informatics/Computer Science Student</p>
        </div>
        <div className={styles.row}>
          <a
            href={link_ig}
            className={styles.socialLink}
            onClick={() => console.log("asdasd")}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/muksin-bagaskara-650375204/"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/mbagas/" className={styles.socialLink}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

const style = createUseStyles({
  background: {
    height: "100vh",
    width: "99vw",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    color: "white",
    height: "100vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  socialLink: {
    color: "white",
    margin: "5px 20px",
  },
});

export default Profile;
