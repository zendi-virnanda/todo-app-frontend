const Todo = ({
  todo,
  handleComplete,
  setCurrentTodo,
  handleDelete,
  Edit,
  Delete,
}) => {
  return (
    <div key={todo.id} className="relative flex items-center group/actions">
      <label className="relative w-5/6 py-4 pl-8">
        {" "}
        <div className={todo.completed ? "line-through" : ""}>{todo.title}</div>
        <input
          type="checkbox"
          className="appearance-none"
          value=""
          onChange={() => handleComplete(todo.id, todo.completed)}
          checked={todo.completed}
        />
        <span className="absolute w-4 h-4 rounded-sm shadow-sm outline-none checkmark top-5 left-1 bg-blue-100/75 ring-1 ring-blue-400 checked:bg-blue-500"></span>
      </label>
      <div className="flex flex-col absolute right-0 my-2 p-0.5 invisible gap-0.5 bg-blue-100 rounded-md group-hover/actions:visible">
        <div
          className="cursor-pointer hover:bg-blue-400/40 hover:rounded-t-md"
          onClick={() => setCurrentTodo(todo)}
        >
          <Edit className="w-5 h-5 stroke-2 stroke-blue-500 hover:stroke-blue-600" />
        </div>
        <div
          className="cursor-pointer hover:bg-blue-400/40 hover:rounded-b-md"
          onClick={() => handleDelete(todo.id)}
        >
          <Delete className="w-5 h-5 stroke-2 fill-none stroke-blue-500 hover:stroke-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
