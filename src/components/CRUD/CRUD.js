import { useEffect, useState } from "react";
import axios from "axios";
import { FiRefreshCw } from "react-icons/fi";

// My CRUD operations are below using my Mock API

const BeerOrder = () => {
  const [text, setText] = useState("Type your order:");
  const [users, setUsers] = useState(null);

  const submit = async () => {
    console.log(text);
    await axios.post("https://63f557143f99f5855dc03197.mockapi.io/Beer", {
      name: text,
    });
  };

  const refresh = async () => {
    let data = await axios.get(
      "https://63f557143f99f5855dc03197.mockapi.io/Beer"
    );
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => submit()}
        style={{
          backgroundColor: "#61dafb",
          height: "3rem",
          width: "6rem",
        }}
      >
        {" "}
        Order
      </button>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        style={{
          width: "15rem",
          backgroundColor: "grey",
          height: "6rem",
          color: "white",
        }}
      />
      <br></br>
      <FiRefreshCw
        color="#61dafb"
        size={26}
        value="refresh"
        onClick={() => refresh()}
      />
      <div>
        <ul>
          {users
            ? users.data.map((user, i) => (
                <ListValueObject
                  key={user.id}
                  name={user.name}
                  id={user.id}
                  refresh={refresh}
                />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

const ListValueObject = ({ name, id, refresh }) => {
  const [tempText, setTempText] = useState(name);
  const makeChange = async (deleteObject) => {
    if (deleteObject) {
      await axios.delete(
        `https://63f557143f99f5855dc03197.mockapi.io/Beer/${id}`
      );
    } else {
      await axios.put(
        `https://63f557143f99f5855dc03197.mockapi.io/Beer/${id}`,
        { name: tempText }
      );
    }
    refresh();
  };
  return (
    <div key={id} style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="text"
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
      />
      <button onClick={() => makeChange(false)} label="update">
        <p>Refresh</p>
      </button>
      <button onClick={() => makeChange(true)} label="delete">
        <p>Delete</p>
      </button>
    </div>
  );
};

export default BeerOrder;
