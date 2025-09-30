"use client";

const LoadingSpinner = ({ 
  size = "medium", 
  color = "gold", 
  text = "Loading...", 
  showText = true,
  className = "" 
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
    xlarge: "w-16 h-16"
  };

  const colorClasses = {
    gold: "border-[#C5A880]",
    white: "border-white",
    gray: "border-gray-400"
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {/* Spinner */}
      <div className="relative">
        <div 
          className={`
            ${sizeClasses[size]} 
            border-2 
            ${colorClasses[color]} 
            border-t-transparent 
            rounded-full 
            animate-spin
          `}
        />
        {/* Inner glow effect */}
        <div 
          className={`
            absolute inset-0 
            ${sizeClasses[size]} 
            border-2 
            border-transparent 
            rounded-full 
            animate-pulse
            shadow-lg
          `}
          style={{
            boxShadow: `0 0 10px ${color === 'gold' ? '#C5A880' : color === 'white' ? '#ffffff' : '#9ca3af'}40`
          }}
        />
      </div>
      
      {/* Loading text */}
      {showText && (
        <p className={`text-sm font-medium animate-pulse ${
          color === 'gold' ? 'text-[#C5A880]' : 
          color === 'white' ? 'text-white' : 
          'text-gray-400'
        }`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;