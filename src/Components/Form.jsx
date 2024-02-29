import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ editTodo, editId, fetchData }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputOwner, setInputOwner] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  useEffect(() => {
    if (editTodo) {
      setInputTitle(editTodo.title);
      setInputOwner(editTodo.owner);
      setInputLocation(editTodo.location);
    } else {
      setInputTitle("");
    }
  }, [setInputTitle, setInputOwner, editTodo]);

  const titleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const editTask = (id) => {
    axios
      .put("http://localhost:8000/todos/" + id, {
        id: id,
        title: inputTitle,
        owner: inputOwner,
        location: inputLocation,
        completed: false,
      })
      .then(function () {
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addNewTask = () => {
    axios
      .post("http://localhost:8000/todos", {
        id: uuidv4(),
        title: inputTitle,
        owner: inputOwner,
        location: inputLocation,
        completed: false,
      })
      .then(function (response) {
        fetchData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ownerChange = (e) => {
    setInputOwner(e.target.value);
  };

  const locationChange = (e) => {
    setInputLocation(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      addNewTask();
      setInputTitle("");
      setInputOwner("");
      setInputLocation("");
    } else {
      editTask(editId);
    }
    setInputTitle("");
    setInputOwner("");
    setInputLocation("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="add a new task..."
        className="task-input"
        value={inputTitle}
        required
        onChange={titleChange}
      />

      <input
        type="text"
        placeholder="add an owner..."
        className="task-input"
        value={inputOwner}
        required
        onChange={ownerChange}
      />

      <input
        type="text"
        placeholder="add a location..."
        className="task-input"
        value={inputLocation}
        required
        onChange={locationChange}
      />

      <button type="submit" className="button-add">
        {editTodo ? "edit" : "add"}
      </button>
    </form>
  );
};

export default Form;
