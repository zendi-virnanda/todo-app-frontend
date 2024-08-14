export default function todos(todos = [], action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload.data;
    case "ADD_TODO":
      return [...todos, action.payload.data];
    case "UPDATE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload.data.id ? action.data.payload : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.data.id);
    case "COMPLETE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload.data.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "INCOMPLETE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload.data
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "SEARCH_TODO":
      return action.payload.data;
    default:
      return todos;
  }
}
