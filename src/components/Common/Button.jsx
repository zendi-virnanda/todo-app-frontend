export default function Button({ type = "submit", className = "", text = "" }) {
  return (
    <>
      <button type={type} className={className}>
        {text}
      </button>
    </>
  );
}
