import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

function Search() {
  const users = useContext(UserContext);
  // console.log(users.users);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([users.users]);
  // console.log(users);

  useEffect(() => {
    setList(users.users);
    // console.log(list);
  }, [users.users]);
  useEffect(() => {
    if (search !== "") {
      const results = users.users.filter((user) => {
        return user.name.toLowerCase().startsWith(search.toLowerCase());
      });
      setList(results);

      // console.log(list);
    } else {
      setList(users.users);
    }
    users.dataUser(list);
    // console.log(list);
  }, [users.users]);

  const handleInput = (e) => {
    e.preventDefault();
    const getValue = e.target.value;
    // const search = e.target.value;
    // if (search !== "") {
    //   const results = users.users.filter((user) => {
    //     return user.name.toLowerCase().startsWith(search.toLowerCase());
    //   });
    //   setList(results);
    //   users.dataUser(results);
    //   // console.log(list);
    // } else {
    //   setList(users.users);
    //   users.dataUser(users.users);
    // }

    // console.log(getValue);
    // if (getValue !== "") {
    //   const results = users.users.filter((user) => {
    //     return user.name.toLowerCase().startsWith(getValue.toLowerCase());
    //   });
    //   setList(results);
    //   console.log(list);
    // } else {
    //   setList(users.users);
    // }
    // setSearch(getValue);
    // console.log(search);
    // users.dataUser(list);
  };
  return (
    <form>
      <input placeholder="search" onChange={handleInput} />
    </form>
  );
}
export default Search;
