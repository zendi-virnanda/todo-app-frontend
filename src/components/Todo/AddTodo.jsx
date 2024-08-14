import FormTodo from "./FormTodo";
const AddTodo = () => {
  return (
    <>
      <div className="w-full lg:absolute lg:top-0 lg:left-0 bg-blue-50 h-72 lg:h-screen lg:w-1/2 lg:overflow-hidden">
        <span className="absolute text-xs font-semibold font-borel top-4 left-4 sm:text-base">
          <img
            className="w-auto h-10 mx-auto"
            src="https://i.pinimg.com/originals/52/6a/bf/526abf16cc3e74882fa7304abc0f841c.png"
            alt="Your Company"
          />
        </span>
        <div className="flex flex-col justify-center w-full gap-5 px-10 pt-2 sm:px-6 sm:ml-14 sm:w-5/6 h-72 lg:min-h-screen lg:gap-8 ">
          <h3 className="font-rem font-bold min-[360px]:mt-4 text-2xl min-[360px]:text-3xl min-[520px]:text-4xl md:text-5xl">
            Do you have any plans ?
          </h3>
          <FormTodo />
        </div>
      </div>
    </>
  );
};

export default AddTodo;
