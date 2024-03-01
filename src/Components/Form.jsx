import { useEffect } from "react";

const Form = ({ inputTitle, inputOwner, inputLocation, setInputTitle, setInputOwner, setInputLocation, editTodo, addNewTask, editTask, editId }) => {

  //title
  useEffect(() => {
    if (editTodo) {
      setInputTitle(editTodo.title);
      setInputOwner(editTodo.owner);
      setInputLocation(editTodo.location);
      
    } else {
      setInputTitle("");
    }
  }, [setInputTitle,setInputOwner, editTodo]);

  const titleChange = (e) => {
    setInputTitle(e.target.value);
  };


  //owner
  // useEffect(() => {
  //   if (editTodo) {
  //     setInputTitle(editTodo.title);
  //     setInputOwner(editTodo.title);
  //   } else {
  //     setInputOwner("");
  //   }
  // }, [setInputTitle, setInputOwner, editTodo]);

  const ownerChange = (e) => {
    setInputOwner(e.target.value);
  };

  //location
  // useEffect(() => {
  //   if (editTodo) {
  //     setInputLocation(editTodo.title);
  //   } else {
  //     setInputLocation("");
  //   }
  // }, [setInputLocation, editTodo]);

  const locationChange = (e) => {
    setInputLocation(e.target.value);
  };




  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      addNewTask()
      setInputTitle("");
      setInputOwner("");
      setInputLocation("");
    } else {
      editTask(editId)
      
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
