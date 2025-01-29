// src/app/components/ui/Button.tsx

import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Button = ({ className, children, variant = 'default', size = 'md', onClick }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-md focus:outline-none transition-colors';
  const variantStyles = variant === 'outline'
    ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
    : 'bg-primary text-white hover:bg-primary-dark';
  
  const sizeStyles = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
