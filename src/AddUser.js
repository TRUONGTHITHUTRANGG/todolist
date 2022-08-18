import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
function Test() {
  const { data, listUser } = useContext(UserContext);
  return <AddUser data={data} listUser={listUser} />;
}
function AddUser() {
  const getData = useContext(UserContext);
  // console.log("getdt", getData);
  const users = getData.listAdd;
  // console.log("users", users);
  const hanldeIncrease = (id) => {
    const getId = id;

    users.map((value) => {
      // console.log("id", getId, value);
      if (getId == value.id) {
        // console.log("get id", value);
        if (value.qty) {
          value.qty += 1;
        } else {
          value.qty = 1;
        }
        // console.log(value.qty);
      }
    });
    getData.setUser([...users]);
  };
  const hanldeDecrease = (id, values) => {
    // e.preventDefault();
    const getId = id;
    const getQty = values;
    // console.log(getQty);
    if (getQty > 1) {
      users.map((value, key) => {
        if (getId == value.id) {
          value.qty = value.qty - 1;
        }
      });
    } else {
      // let a = null;

      users.map((value, key) => {
        if (getId == value.id) {
          //   a = key;
          delete users.splice(key, 1);
        }
      });
      //   delete users.splice(a, 1);
    }
    // console.log(users);
    getData.setUser([...users]);
  };
  const hanldeDelete = (id) => {
    const getId = id;
    // console.log(getId);
    users.map((value, key) => {
      // console.log(key);
      if (getId == value.id) {
        // delete users[key];
      }
    });
    getData.setUser([...users]);
  };
  const renderUser = () => {
    return users.map((item) => (
      <tr>
        <td className="description">
          <h4>
            <a href="">{item?.name}</a>
          </h4>
        </td>
        <td className="price">
          <p>{item?.year}</p>
        </td>
        <td className="quantity">
          <div className="quantity_button">
            <a
              id={item?.id}
              values={item?.qty ?? 0}
              onClick={() => hanldeDecrease(item?.id, item?.qty ?? 0)}
              className="quantity_up"
            >
              {" "}
              -{" "}
            </a>
            <input
              className="quantity_input"
              type="text"
              //   name="quantity"
              value={item?.qty ?? 0}
              size={2}
            />
            <a
              id={item?.id}
              onClick={() => hanldeIncrease(item?.id)}
              className="quantity_down"
            >
              {" "}
              +{" "}
            </a>
          </div>
        </td>
        <td className="total">
          <p className="total_price">{item?.year * (item?.qty ?? 0)}</p>
        </td>
        <td className="delete">
          <a
            className="quantity_delete"
            id={item?.id}
            onClick={() => hanldeDelete(item?.id)}
          >
            Delete
          </a>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="table-responsive info">
        <table className="table table-condensed">
          <thead>
            <tr className="menu">
              <td className="description text">name</td>
              <td className="price text">Price</td>
              <td className="quantity text">Quantity</td>
              <td className="total text">Total</td>
            </tr>
          </thead>
          <tbody>{renderUser()}</tbody>
        </table>
      </div>
    </>
  );
}
export default Test;
