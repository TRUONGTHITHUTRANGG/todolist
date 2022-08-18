import { useState } from "react";
import Content from "./Content";

function Test() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <Content />
      <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
export default Test;
