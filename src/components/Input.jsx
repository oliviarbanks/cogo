const Input = ({
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
    <div>
      <label htmlFor={name} className="text-[14px]">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex w-[100%] px-4 py-3 mt-2 items-center gap-2 rounded-md border border-gray-300 bg-white placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#A0A0A0] text-black focus:outline-none focus:ring ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default Input;