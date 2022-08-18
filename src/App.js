import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Parent from "./count";

// import ListUser from "./ListUser";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import AddUser from "./AddUser";
import ListUser from "./ListUser";
import Feature from "./Feature";
import Wrap from "./Resize";

function App() {
  const [users, setUsers] = useState([]);
  const [dataUser, setData] = useState([]);
  const [listAdd, setListAdd] = useState([]);
  const [count, setCount] = useState(10);

  const listUser = useCallback((listUsers) => {
    if (!listAdd.includes(listUsers)) {
      setListAdd((listAdd) => [...listAdd, listUsers]);
    }
  }, []);

  const getData = useCallback((data) => {
    setData(data);
  }, []);
  useEffect(() => {
    axios.get("https://reqres.in/api/user").then((res) => {
      // console.log(res);
      setUsers(res.data.data);
      // setData(res.data.data);
      // console.log("list user ", users);
    });
  }, []);
  return (
    <UserContext.Provider
      value={{
        users: users,
        dataUser: getData,
        data: dataUser,
        listAdd: listAdd,
        listUser: listUser,
        // setUser: setData,
        setUser: setListAdd,
        count: count,
        setCount: setCount,
      }}
    >
      <div className="wraper">
        <div className="search">
          <Search />
          <ListUser />
        </div>
        <AddUser />
      </div>
      <Wrap />
      <Parent />
    </UserContext.Provider>
  );
}

export default App;
