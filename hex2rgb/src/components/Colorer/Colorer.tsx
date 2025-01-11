import React from "react";
import "./colorer.css";

const Colorer: React.FC = () => {
  const [rgbColor, setColor] = React.useState({valid: true, color: "rgb(255,255,255)"});
  const hexColorPattern = "^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$";
  const invalidColor = "#ea4b35";
  const invalidColorText = "Ошибка!";
  const hexRegex = new RegExp(hexColorPattern);


  const hex2rgb = (hexString: string): string => {
    const hexStringLength = hexString.length;
    if (
      hexString.startsWith("#") &&
      (hexStringLength === 4 || hexStringLength === 7)
    ) {
      const hexColor =
        hexStringLength === 7
          ? hexString.substring(1)
          : hexString
              .substring(1)
              .split("")
              .map((item) => item + item)
              .join("");
      const rgbArray = hexColor.match(/../g)?.map((item) => parseInt(item, 16));

      const res = `rgb(${rgbArray?.join(", ")})`;
      return res;
    }
    return "rgb(255,255,255)";
  };

  const switchColor = (color: string): void => {
    if (hexRegex.test(color)) {
      const convertedColor = hex2rgb(color);
      setColor({ ["valid"]: true, ["color"]: convertedColor });
    } else {
      const convertedColor = hex2rgb(invalidColor);
      setColor({ ["valid"]: false, ["color"]: convertedColor });
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const color = data.get("color-hex-input") as string;
      switchColor(color);
  };
  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.currentTarget;
    if (event && target) {
      const color = target.value;
      switchColor(color);
    }
  };
  return (
    <div className="colorer" style={{ backgroundColor: rgbColor.color }}>
      <h2 className="colorer-title">Конвертер цвета hex2rgb</h2>
      <form className="colorer-form" onSubmit={handleSubmit}>
        <label className="colorer-form-label" htmlFor="color-hex-input">
          Введите hex-код цвета в виде #FFF или #FFFFFF
        </label>
        <input
          className="colorer-input colorer-hex-input"
          type="text"
          id="color-hex-input"
          name="color-hex-input"
          maxLength={7}
          onInput={handleInput}
          placeholder={"#FFFFFF"}
          pattern={hexColorPattern}
        />
        <input
          className="colorer-input colorer-rgb-input"
          type="text"
          value={rgbColor.valid ? rgbColor.color : invalidColorText}
          disabled
        />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Colorer;
