import { useState } from "react";
import ColorDisplay from "../ColorDisplay/ColorDisplay";
import tinycolor from "tinycolor2";
import ColorList from "../ColorList/ColorList";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("white");
  const [inputText, updateinputText] = useState("");
  const [colors, updateColors] = useState(["red", "green", "black", "white"]);
  const isValidColor = tinycolor(inputText).isValid();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (event) => {
    updateinputText(event.target.value);
    setIsDisabled(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log(inputText);
      setColor(inputText);
      if (!colors.includes(inputText) && isValidColor) {
        updateColors((oldColor) => [...oldColor, inputText]);
      }
      updateinputText("");
      setIsDisabled(true);
    }
  };

  const handleColorAdd = (e) => {
    setColor(inputText);
    if (!colors.includes(inputText) && isValidColor) {
      updateColors((oldColor) => [...oldColor, inputText]);
    }
    updateinputText("");
    setIsDisabled(true);
  };

  return (
    <div className={styles.colorPickerContainer}>
      <div className={styles.colorAdd}>
        <input
          type="text"
          placeholder="Enter Color Code"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />{" "}
        <button
          className={styles.inputBtn}
          disabled={isDisabled}
          onClick={handleColorAdd}
        >
          {" "}
          Add Color
        </button>{" "}
      </div>

      <ColorDisplay color={color} />

      <div className={styles.colorMenu}>
        <ColorList colors={colors} color={setColor} />
      </div>
    </div>
  );
}

export default ColorPicker;
