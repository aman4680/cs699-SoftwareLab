import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ComingSvg from "../../assets/svg/coming.svg";
import eventsPageImage from "../../assets/images/pages/events.png";
import styles from "./Events.module.css";

function Events() {
  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>

      <div className={styles.Events}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <h3 className={styles.title}>Event Page is Coming Soon!!!</h3>
            <p>
              We are excited to announce that we are currently in the process of
              organizing fantastic events, and we are working hard to create a
              dedicated web page that will provide you with all the information
              you need to know about the events. Thank you for your patience and
              support, and we can&apos;t wait to see you there!
            </p>

            <Link to="/" className={styles.homeButton}>
              Home
            </Link>
          </div>

          <div className={styles.image}>
            <img src={ComingSvg} alt="coming" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
