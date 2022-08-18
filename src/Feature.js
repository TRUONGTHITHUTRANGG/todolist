import React, { useState } from "react";
import Square from "./Square";
const Color = ({ number }) => {
  const isNumber = number % 2 === 0;
  return <Square style={{ background: isNumber ? "red" : "green" }} />;
};
const Memoried = React.memo(<Color />, (preProp, nextProp) => {
  return preProp.number % 2 === nextProp.number % 2;
  // return true;
});
function Feature() {
  const [number, setNumber] = useState(0);
  console.log(number);
  return (
    <form>
      <input
        placeholder="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <Memoried number={number} />
    </form>
  );
}
export default Feature;
