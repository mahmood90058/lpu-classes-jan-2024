
import { useState } from "react";
import styles from "./Todo.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { FaEdit, FaRegCheckSquare, FaSquare, FaExclamationCircle } from "react-icons/fa";
import EditTodo from "./EditTodo";

function Todo({ todo, deleteTodo, toggleCompleted, updateTitle }) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  function handleDelete() {
    deleteTodo(todo.id);
  }

  function handleToggle() {
    toggleCompleted(todo.id);
  }

  if (isUpdateMode) {
    return (
      <EditTodo
        id={todo.id}
        updateTitle={updateTitle}
        setIsUpdateMode={setIsUpdateMode}
        title={todo.title}
      />
    );
  }

  return (
    <div className={styles.todo}>
      <h3 className={todo.completed ? styles.completed : ""}>{todo.title}</h3>

      <div className={styles.buttonContainer}>
        <span onClick={() => setIsUpdateMode(true)} className={styles.btn}>
          <FaEdit />
        </span>
        <input
          type="checkbox"
          name="todo-checkbox"
          id="todo-checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.todoCheckbox}
        />
        {todo.priority && (
          <span className={styles.priorityIcon}>
            <FaExclamationCircle />
          </span>
        )}
        <span onClick={handleDelete} className={styles.btn}>
          <IoCloseOutline />
        </span>
      </div>
    </div>
  );
}

export default Todo;
