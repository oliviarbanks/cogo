const Button = ({
  type = 'button',
  onClick,
  children,
  disabled = false,
  loading = false,
  className = '',
}) => {
  
    return (
        <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex m-1 bg-white text-black text-lg font-bold rounded-full justify-center items-center px-20 py-half 
        ${className} ${loading && 'is-loading'}`}
        >
      {loading && <span className="spinner-border spinner-border-sm"></span>}
      {children}
        </button>
  );
};

export default Button