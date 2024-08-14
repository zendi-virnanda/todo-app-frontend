export function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  labelCustomClass,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) {
  return (
    <div>
      <label htmlFor={labelFor} className={labelCustomClass}>
        {labelText}
      </label>
      <div className="mt-2">
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className={customClass}
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
