import { useState } from "react";

function AddColor() {
  const [color, setColor] = useState("deepskyblue");

  const styles = {
    backgroundColor: color,
  };

  const INITIAL_COLOR_LIST = ["Deepskyblue", "orange", "crimson"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);

  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color" />

      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}

    </div>
  );

}


function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: "400px",
    marginTop: "10px",
  };

  return (
    <div style={styles}></div>
  );

}


export { AddColor, ColorBox };
