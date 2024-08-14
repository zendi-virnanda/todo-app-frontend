import * as api from "../api";

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTodos();
    dispatch({ type: "FETCH_TODOS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.addTodo(todo);
    dispatch({ type: "ADD_TODO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    const { data } = await api.updateTodo(id, todo);
    dispatch({ type: "UPDATE_TODO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const completeTodo = (id) => async (dispatch) => {
  try {
    await api.completeTodo(id);
    dispatch({ type: "COMPLETE_TODO", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const incompleteTodo = (id) => async (dispatch) => {
  try {
    await api.incompleteTodo(id);
    dispatch({ type: "INCOMPLETE_TODO", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchTodo = (query) => async (dispatch) => {
  try {
    const { data } = await api.searchTodo(query);
    dispatch({ type: "SEARCH_TODO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
