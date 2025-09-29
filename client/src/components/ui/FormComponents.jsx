import React from 'react';
import { Button } from './button';

// Input Component
export const Input = React.forwardRef(({ 
  className = "", 
  type = "text", 
  label,
  error,
  required = false,
  ...props 
}, ref) => {
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gold"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        ref={ref}
        className={`form-input ${error ? 'border-red-500 focus:border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
});
Input.displayName = "Input";

// Textarea Component
export const Textarea = React.forwardRef(({ 
  className = "", 
  label,
  error,
  required = false,
  rows = 4,
  ...props 
}, ref) => {
  const textareaId = props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-gold"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        ref={ref}
        rows={rows}
        className={`form-input resize-vertical ${error ? 'border-red-500 focus:border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
});
Textarea.displayName = "Textarea";

// Select Component
export const Select = React.forwardRef(({ 
  className = "", 
  label,
  error,
  required = false,
  options = [],
  placeholder = "Select an option",
  ...props 
}, ref) => {
  const selectId = props.id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-sm font-medium text-gold"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          ref={ref}
          className={`form-input appearance-none pr-10 ${error ? 'border-red-500 focus:border-red-500' : ''} ${className}`}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
});
Select.displayName = "Select";

// Checkbox Component
export const Checkbox = React.forwardRef(({ 
  className = "", 
  label,
  error,
  ...props 
}, ref) => {
  const checkboxId = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <div className="relative">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={`
              w-5 h-5 bg-gray-800 border-2 border-gold/30 rounded 
              checked:bg-gold checked:border-gold 
              focus:ring-2 focus:ring-gold focus:ring-offset-0 focus:ring-offset-black
              transition-colors duration-200
              ${error ? 'border-red-500' : ''} 
              ${className}
            `}
            {...props}
          />
          <svg 
            className="absolute top-0.5 left-0.5 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        {label && (
          <label 
            htmlFor={checkboxId}
            className="text-sm text-gray-300 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="text-red-400 text-sm ml-8">{error}</p>
      )}
    </div>
  );
});
Checkbox.displayName = "Checkbox";

// Radio Group Component
export const RadioGroup = ({ 
  name,
  options = [],
  value,
  onChange,
  label,
  error,
  required = false,
  className = ""
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <fieldset>
          <legend className="block text-sm font-medium text-gold mb-3">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </legend>
          <div className="space-y-2">
            {options.map((option, index) => {
              const radioId = `${name}-${index}`;
              return (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id={radioId}
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    className="w-4 h-4 text-gold bg-gray-800 border-gold/30 focus:ring-gold focus:ring-2"
                  />
                  <label htmlFor={radioId} className="text-sm text-gray-300 cursor-pointer">
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
      )}
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
};

// Form Container Component
export const FormContainer = ({ 
  children, 
  title,
  subtitle,
  onSubmit,
  className = ""
}) => {
  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-300 text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <form onSubmit={onSubmit} className="card space-y-6">
        {children}
      </form>
    </div>
  );
};

// Contact Form Component (Example Usage)
export const ContactForm = ({ onSubmit, className = "" }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer
      title="Get in Touch"
      subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      onSubmit={handleSubmit}
      className={className}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          value={formData.name}
          onChange={handleChange('name')}
          error={errors.name}
          required
        />
        <Input
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          required
        />
      </div>
      
      <Input
        label="Subject"
        value={formData.subject}
        onChange={handleChange('subject')}
        error={errors.subject}
        required
      />
      
      <Textarea
        label="Message"
        value={formData.message}
        onChange={handleChange('message')}
        error={errors.message}
        rows={6}
        required
      />
      
      <div className="flex justify-center pt-4">
        <Button 
          type="submit" 
          variant="luxury" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </FormContainer>
  );
};