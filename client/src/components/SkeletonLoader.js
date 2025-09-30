"use client";

const SkeletonLoader = ({ 
  type = "text", 
  lines = 3, 
  className = "",
  width = "100%",
  height = "auto"
}) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded";

  const renderSkeleton = () => {
    switch (type) {
      case "text":
        return (
          <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={`${baseClasses} h-4`}
                style={{
                  width: index === lines - 1 ? "75%" : "100%"
                }}
              />
            ))}
          </div>
        );

      case "card":
        return (
          <div className={`${className}`}>
            <div className={`${baseClasses} h-48 mb-4`} />
            <div className={`${baseClasses} h-4 mb-2`} />
            <div className={`${baseClasses} h-4 w-3/4 mb-2`} />
            <div className={`${baseClasses} h-6 w-1/2`} />
          </div>
        );

      case "avatar":
        return (
          <div className={`${baseClasses} rounded-full w-12 h-12 ${className}`} />
        );

      case "button":
        return (
          <div className={`${baseClasses} h-10 w-24 ${className}`} />
        );

      case "image":
        return (
          <div 
            className={`${baseClasses} ${className}`}
            style={{ width, height: height === "auto" ? "200px" : height }}
          />
        );

      case "product":
        return (
          <div className={`${className}`}>
            <div className={`${baseClasses} aspect-square mb-3`} />
            <div className={`${baseClasses} h-4 mb-2`} />
            <div className={`${baseClasses} h-4 w-2/3 mb-2`} />
            <div className={`${baseClasses} h-5 w-1/3`} />
          </div>
        );

      case "list":
        return (
          <div className={`space-y-4 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`${baseClasses} rounded-full w-8 h-8 flex-shrink-0`} />
                <div className="flex-1 space-y-2">
                  <div className={`${baseClasses} h-4`} />
                  <div className={`${baseClasses} h-3 w-3/4`} />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div 
            className={`${baseClasses} ${className}`}
            style={{ width, height }}
          />
        );
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader;