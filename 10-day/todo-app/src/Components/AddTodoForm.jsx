// import { useState } from "react";
// import styles from "./AddTodoFrom.module.css";
// import { toast } from "react-toastify";
// function AddTodoForm({ addTodo }) {
//   const [todoTitle, setTodoTitle] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     // check for blank todo
//     if (todoTitle.trim().length === 0) {
//       setTodoTitle("");
//       toast.error("type something in input field");
//       return;
//     }

//     const newTodo = {
//       id: crypto.randomUUID(),
//       title: todoTitle,
//       completed: false,
//     };
//     addTodo(newTodo);
//     // console.log(addTodo)
//     setTodoTitle("");
//   }
//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <input
//         type="text"
//         name="todo-title-input"
//         id="todo-title-input"
//         className={styles.todoInput}
//         value={todoTitle}
//         onChange={(e) => {
//           setTodoTitle(e.target.value);
//         }}
//       />
//       <button type="submit" className={styles.todoButton}>
//         Add
//       </button>
//     </form>
//   );
// }

// // form
// // input : controlled by react
// // submit event : grab input value , create new Todo , add new todo to app state
// // interlude
// export default AddTodoForm;










import { useState, useEffect } from "react";
import styles from "./AddTodoFrom.module.css";

function AddTodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let timeout;
    if (showNotification) {
      timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showNotification]);

  function handleSubmit(e) {
    e.preventDefault();
    // check for blank todo
    if (todoTitle.trim().length === 0) {
      setTodoTitle("");
      setShowNotification(true);
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      completed: false,
    };
    addTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="todo-title-input"
        id="todo-title-input"
        className={`${styles.todoInput} ${showNotification ? styles.errorInput : ""}`}
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        placeholder="Type something..."
      />
      <button type="submit" className={styles.todoButton}>
        Add
      </button>
      {showNotification && <div className={styles.errorNotification}>Please enter a valid todo!</div>}
    </form>
  );
}

export default AddTodoForm;

