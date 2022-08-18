import { memo, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
function Test() {
  const { count, setCount } = useContext(UserContext);
  return <Timer count={count} setCount={setCount} />;
}
const Timer = memo(({ count, setCount }) => {
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prev) => {
        if (prev < 2) {
          clearInterval(timerId);
          return setCount(10);
        } else {
          return prev - 1;
        }
      });
      //   console.log(count);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <h2>{count}</h2>;
});
export default Test;
