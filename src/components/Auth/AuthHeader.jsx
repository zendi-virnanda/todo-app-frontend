export default function AuthHeader({ heading }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="w-auto h-20 mx-auto"
        src="https://i.pinimg.com/originals/52/6a/bf/526abf16cc3e74882fa7304abc0f841c.png"
        alt="Your Company"
      />
      <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
        {heading}
      </h2>
    </div>
  );
}
