import axios from "../services/api";

export const fetchTodos = async () => axios.get("/v1/todos");
export const addTodo = (newTodos) => axios.post("/v1/todos", newTodos);
export const updateTodo = (id, updatedTodo) =>
  axios.put(`/v1/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`/v1/todos/${id}`);
export const completeTodo = (id) => axios.post(`/v1/todos/${id}/complete`);
export const incompleteTodo = (id) => axios.post(`/v1/todos/${id}/incomplete`);
export const searchTodo = (query) =>
  axios.get(`/v1/todos/search/find?search=${query}`);
