import styles from "./ColorList.module.css";

const ColorList = (props) => {
  const handleChangeColor = (e) => {
    const newColor = e.target.style.backgroundColor;
    props.color(newColor);
  };

  return (
    <div className={styles.colorList}>
      {props.colors.map((color, idx) => (
        <button
          className={styles.colorBtn}
          key={idx}
          style={{ backgroundColor: color }}
          onClick={handleChangeColor}
        ></button>
      ))}
    </div>
  );
};

export default ColorList;
