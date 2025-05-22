const Button = ({
  children,
  variant = "primary",
  disabled = false,
  addClassName,
  ...props
}) => {
  const baseClasses =
    "flex items-center font-bold py-2 px-4 rounded hover:cursor-pointer transition duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "border border-gray-200 hover:border-gray-600",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${addClassName}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
