import { useState } from "react";

function Square() {
  const [color, setColor] = useState("red");
  return <h2>{color}</h2>;
}
export default Square;
