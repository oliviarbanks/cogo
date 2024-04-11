
const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  className = '',
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default InputField;