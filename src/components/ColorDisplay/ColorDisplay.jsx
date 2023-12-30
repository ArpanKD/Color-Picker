import styles from "./ColorDisplay.module.css";

const ColorDisplay = ({ color }) => {
  return (
    <div
      className={styles.colorDisplay}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorDisplay;
