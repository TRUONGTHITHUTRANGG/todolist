import { memo, useContext, useEffect, useRef } from "react";
import { UserContext } from "./UserContext";
function UseContext() {
  const { data, listUser, setCount } = useContext(UserContext);
  //   console.log(listUser);
  // console.log(data);
  return <ListUser data={data} listUser={listUser} setCount={setCount} />;
}

function useTraceUpdate(props) {
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log("Changed props:", changedProps);
    }
    prev.current = props;
  });
}
const ListUser = memo(({ data, listUser, setCount }) => {
  //   console.log(data);
  useTraceUpdate({ data, listUser });

  const handleAdd = (item) => {
    listUser(item);
    setCount(10);
  };
  console.log(111);
  return (
    <ul>
      {data.map((item) => {
        // console.log(item);
        return (
          <div className="list-item">
            <li className="item">{item.name}</li>
            <button onClick={() => handleAdd(item)}>Add</button>
          </div>
        );
      })}
    </ul>
  );
});
// const ListUser = () => {
//   return <h2>kk</h2>;
// };

export default UseContext;
