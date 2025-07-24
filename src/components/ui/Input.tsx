import { forwardRef } from 'react';

interface InputProps {
    label?: string;
    type?: 'text' | 'email' | 'password' | 'tel' | 'date';
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type = 'text', placeholder, error, disabled = false, required = false, className = '', ...props }, ref) => {
        return (
            <div className="space-y-1">
                {/* Label */}
                {label && (
                    <label className="block text-sm font-medium text-gray-700">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}

                {/* Input Field */}
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`
            w-full px-3 py-2 border rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-blue-500'
                    }
            ${className}
          `}
                    {...props}
                />

                {/* Error Message */}
                {error && (
                    <p className="text-sm text-red-600 mt-1">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';