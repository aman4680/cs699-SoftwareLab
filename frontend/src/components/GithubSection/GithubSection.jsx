import React from "react";
import styles from "./GithubSection.module.css";

function GithubSection() {
  return (
    <div className={styles.GithubSection}>
      <div className="container">
        <h2 className={styles.title}>
          <p>We strive for</p>
          <span className={styles.spanGradient}>
            Clean and Maintainable Code
          </span>
        </h2>

        <div className={styles.buttonContainer}>
          <a
            href="https://github.com/suyoggatkal20/placement-management/"
            className={`${styles.githubButton} ${styles.glowEffect}`}
            target="blank"
          >
            Source Code
            <svg className={styles.glowContainer}>
              <rect
                pathLength="100"
                strokeLinecap="round"
                className={styles.glowBlur}
              />
              <rect
                pathLength="100"
                strokeLinecap="round"
                className={styles.glowLine}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GithubSection;
