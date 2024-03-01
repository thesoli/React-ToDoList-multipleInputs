import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import axios from "axios";
import TodosList from "./Components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editId, setEditId] = useState("");

  const fetchData = () => {
    axios.get("http://localhost:8000/todos").then((response) => {
      setTodos(response.data);
      return response;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form editTodo={editTodo} editId={editId} fetchData={fetchData} />
        </div>

        <div>
          <TodosList
            key={todos.id}
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            setEditId={setEditId}
            fetchData={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
