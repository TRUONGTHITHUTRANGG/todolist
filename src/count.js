import { useRef, useState, useEffect } from "react";

function Parent() {
  const [count, setCount] = useState(5);
  const ref = useRef(0);
  let hold = 0;
  const countdown = () => {
    hold = setInterval(() => {
      //   console.log("ref.current-->", ref.current);
      setCount((c) => c - 1);
    }, 1000);
  };
  useEffect(() => {
    if (count < 1) clearInterval(hold);
  }, [count]);

  return (
    <>
      <h3>Timer : {count}</h3>
      <br />
      <button onClick={countdown}>countdown</button>
    </>
  );
}

export default Parent;
