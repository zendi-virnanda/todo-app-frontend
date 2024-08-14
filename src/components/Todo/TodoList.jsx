import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  getTodos,
  incompleteTodo,
  searchTodo,
} from "../../actions/todos";
import ModalTodo from "./ModalTodo";
import Todo from "./Todo";
const TodoList = ({ NoPlan, Edit, Delete }) => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Add a state for the search query
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  useEffect(() => {
    if (todos.length > 0) {
      setCompletedTodos(todos.filter((todo) => todo.completed).length);
    }
  }, [todos]);

  const handleComplete = (id, status) => {
    if (status) {
      dispatch(incompleteTodo(id));
      setCompletedTodos(completedTodos - 1);
    } else {
      dispatch(completeTodo(id));
      setCompletedTodos(completedTodos + 1);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure?")) return;
    dispatch(deleteTodo(id));
    dispatch(getTodos());
  };
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      dispatch(searchTodo(query)); // Dispatch the searchTodo action
    } else {
      dispatch(getTodos());
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:overflow-hidden lg:max-h-screen">
        <div className="w-full h-full overflow-auto lg:absolute lg:top-0 lg:right-0 lg:w-1/2 ">
          <div className="flex flex-col justify-center gap-10 pt-12 pb-6">
            <div className="flex flex-col items-center justify-center w-full gap-7">
              <h3 className="text-xl font-semibold font-borel md:text-2xl">
                Todo List
              </h3>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search todos"
                className="p-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <div className="w-4/5 p-5 rounded-md shadow-sm bg-white/90 min-h-24">
                <div className="flex flex-col divide-y divide-blue-200">
                  {todos &&
                    todos.map((todo, index) => (
                      <Todo
                        todo={todo}
                        handleComplete={handleComplete}
                        setCurrentTodo={setCurrentTodo}
                        handleDelete={handleDelete}
                        Edit={Edit}
                        Delete={Delete}
                        key={index}
                      ></Todo>
                    ))}
                  {todos.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                      <NoPlan className="w-12 h-12 fill-gray-300" />
                      <span className="font-borel text-[#c6cbd2]">
                        No Plans Found
                      </span>
                    </div>
                  )}
                </div>
                {completedTodos !== 0 && (
                  <div className="flex flex-col items-center justify-between gap-2 py-2 text-xs border-t border-blue-200 sm:flex-row sm:text-sm">
                    <div className="sm:w-4/5 sm:break-words ">
                      <label
                        key={1}
                        className="pr-1 text-sm text-gray-400 line-through"
                      ></label>
                    </div>
                    <div className="flex items-center gap-2 sm:flex-col sm:gap-0 sm:w-1/5">
                      <h3 className="text-3xl font-rem">{completedTodos}</h3>
                      <span className="text-xs font-semibold sm:font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentTodo !== null && (
        <ModalTodo modal={currentTodo} onClose={() => setCurrentTodo(null)} />
      )}
    </>
  );
};

export default TodoList;
