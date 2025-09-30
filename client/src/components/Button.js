"use client";

import LoadingSpinner from "./LoadingSpinner";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  icon = null,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#C5A880] to-[#D4B896] text-black hover:from-black hover:to-gray-900 hover:text-[#C5A880] hover:border hover:border-[#C5A880] focus:ring-[#C5A880] shadow-lg hover:shadow-xl",
    secondary: "border-2 border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-black focus:ring-[#C5A880] hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-[#C5A880] hover:bg-[#C5A880]/10 focus:ring-[#C5A880]",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl"
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2.5 text-sm sm:text-base",
    large: "px-6 py-3 text-base sm:text-lg"
  };

  const isDisabled = disabled || loading;

  const handleClick = (e) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner 
            size="small" 
            color={variant === 'primary' ? 'white' : 'gold'} 
            showText={false}
            className="mr-2"
          />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="mr-2 flex-shrink-0">{icon}</span>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="ml-2 flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;