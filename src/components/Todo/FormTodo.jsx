import { useState, forwardRef, useEffect } from "react";
import { Calendar } from "../../assets/svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/calender.css";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, getTodos, updateTodo } from "../../actions/todos";

const checkValue = (value) => {
  if (!value.trim()) {
    return false;
  } else {
    return true;
  }
};
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year.toString()}-${month}-${day}`;
};

const FormTodo = ({ currentId = null, onClose = () => {} }) => {
  const [todoData, setTodoData] = useState({
    title: "",
    due_date: formatDate(new Date()),
    completed: false,
  });
  const todo = useSelector((state) =>
    currentId !== null ? state.todos.find((p) => p.id === currentId) : null
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo]);
  function handleSubmitTodo() {
    if (currentId !== null) {
      dispatch(updateTodo(currentId, todoData));
      dispatch(getTodos());
      onClose();
    } else if (checkValue(todoData.title)) {
      dispatch(createTodo(todoData));
    } else {
      alert("Please write your plan first");
    }
  }
  const handleChange = (event) => {
    setTodoData({ ...todoData, [event.target.name]: event.target.value });
  };

  const DateInput = forwardRef(({ onClick }, ref) => (
    <button
      type="button"
      title="Add Due Date"
      className="calendar"
      ref={ref}
      onClick={onClick}
    >
      <Calendar className="h-7 w-7 fill-black hover:fill-black" />
    </button>
  ));

  return (
    <>
      <form
        className="text-right"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmitTodo(todoData);
        }}
      >
        <div className="flex items-end justify-end w-full my-5">
          <input
            type="text"
            name="title"
            value={todoData.title}
            onChange={(e) => handleChange(e)}
            placeholder="I want to ..."
            className="w-full bg-transparent  placeholder-gray-500 border-b-2 border-black py-2 text-sm min-[360px]:text-base sm:text-lg md:text-xl font-light font-rem text-gray-700 outline-none focus:border-black"
            required
          />
          <DatePicker
            selected={todoData.due_date}
            onChange={(e) =>
              handleChange({
                target: { name: "due_date", value: formatDate(e) },
              })
            }
            minDate={new Date()}
            customInput={<DateInput />}
          />
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-black text-white rounded-lg self-end font-semibold w-12 min-[360px]:w-16  h-7 min-[360px]:h-9 sm:h-10 text-xs min-[360px]:text-base md:text-lg font-rem"
        >
          {currentId !== null ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
};
export default FormTodo;
