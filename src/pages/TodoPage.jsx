import { createContext } from "react";

import AddTodo from "../components/Todo/AddTodo";
import Modal from "../components/Todo/ModalTodo";
import TodoList from "../components/Todo/TodoList";
import { NoPlan, Edit, Delete } from "../assets/svg";

export const TodoContext = createContext();

function TodoPage() {
  return (
    <div className="relative min-h-screen text-black bg-blue-600 TodoPage lg:overflow-hidden">
      <AddTodo />
      <TodoList NoPlan={NoPlan} Edit={Edit} Delete={Delete} />
    </div>
  );
}

export default TodoPage;
