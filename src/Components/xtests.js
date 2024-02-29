// Update Todo :

//   const updateTodo = (title, id, completed) => {
//     const copyList = [...todos];
//     const itemToEdit = copyList.find(item => item.id === id);
//     itemToEdit.title = input;
//     setTodos(copyList);
//     setEditTodo("");
// }



// delete task test :

// const deleteHandler = ({id}  ) => {
//   setTodos(todos.filter((todo) => todo.id !== id));
// };

// const deleteTask = (id) => {
//   axios.delete(`http://localhost:8000/todos/delete/${id}`)
// .then(function (response) {
//   fetchData()
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
// };



// edit task test :

//   const editTask =()=> axios.put('http://localhost:8000/todos', null, {
//     id: todos.id,
//     title: input,
//     completed: false
// })
// .then(response => {
//   fetchData()
//   console.log(response);})
// .catch(error => {
//   console.log(error);
// });

// const editTask = (id) => {
//   axios.put(`http://localhost:8000/todos` , {
//   id: todos.id,
//   title: input,
//   completed: false
// })
// .then(function (response) {
//   fetchData()
//   console.log(response);})
// .catch(function (error) {
//   console.log(error);
// });
// };
