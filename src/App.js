import React from "react";

function App() {
  const [todo, setTodo] = React.useState([]);

  const [inputValue, setInputValue] = React.useState("");

  const addTodo = () => {
    setTodo([...todo, { txt: inputValue }]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    setTodo(
      todo.filter((e, i) => {
        return i !== index;
      })
    );
  };

  const editTodo = (index) => {
    setTodo(
      todo.map((e, i) => {
        if (index == i) {
          return {
            ...e,
            edit: e.edit ? false : true,
          };
        } else {
          return {
            ...e,
            edit: false,
          };
        }
      })
    );
  };

  console.log(todo, "todo");

  const showTodo =
    todo &&
    todo.length > 0 &&
    todo.map((e, i) => {
      return (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 0,
            border: "1px solid black",
            padding: 0,
          }}
        >
          {e.edit ? (
            <input
              type="text"
              placeholder={e.txt}
              onChange={(values) =>
                setTodo(
                  todo.map((value, index) => {
                    if (index == i) {
                      return {
                        ...e,
                        txt: values.target.value,
                      };
                    } else {
                      return value;
                    }
                  })
                )
              }
            />
          ) : (
            <h3>{e.txt}</h3>
          )}
          <button onClick={() => editTodo(i)}>
            {e.edit ? "Save" : "Edit"}
          </button>
          {!e.edit && <button onClick={() => deleteTodo(i)}>Delete</button>}
        </div>
      );
    });

  return (
    <div style={{ padding: 10 }}>
      <h1>TODO APP</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ENTER Todo"
          type="text"
          value={inputValue}
        />
        <button onClick={addTodo} style={{ marginLeft: 10 }}>
          {" "}
          ADD TODO{" "}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
        {showTodo}
      </div>
    </div>
  );
}

export default App;
