import React from "react";
import styles from "./Hello.module.css";

export default function Hello() {
  return (
    <div className={styles.name}>
      Its me Vishnu
      <h4 className="file">Css file</h4>
    </div>
  );
}