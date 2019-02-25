import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (

        <div className="todo-app">
          <div className="row">
            <div className="col-md-6">
             <h1>Todo List</h1>
             <AddTodo />
            </div>
            <div className="col-md-6">
                  <VisibilityFilters />
              <TodoList />
              </div>
          </div>
        </div>
  );
}
