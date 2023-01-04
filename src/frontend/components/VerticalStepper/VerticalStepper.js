import React from "react";
import styles from "./VerticalStepper.module.css";

export function VerticalStepper({ steps }) {
  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <div className={styles.stepperItem} key={step.id}>
          <div
            className={`${styles.stepperItemIcon} ${
              step.completed ? styles.completed : ""
            }`}
          >
            {index + 1}
          </div>
          <div className={styles.stepperItemLabel}>{step.label}</div>
          <p></p>
        </div>
      ))}
    </div>
  );
}
