import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/actions/index";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const changeBackground = (e, text) => {
    e.target.style.borderStyle = text;
    // e.target.style.backgroundColor = "grey";
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      style={styled}
      className="list-group-item text-capitalize d-flex justify-content-between my-2"
    >
      <h6>
        {/* {id} : {text} */}
        {text}

      </h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
        <button type="button" class="btn btn-primary" onClick={hanldeToggle}>Done</button>
        </span>
        <span className="mx-2 text-danger">
        <button type="button" class="btn btn btn-danger" onClick={handleDelete}>Delete</button>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
