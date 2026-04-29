import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  variant?: 'primary' | 'secondary';
};

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...rest
}) => {
  const baseStyle =
    'px-6 py-3 font-semibold rounded-4xl transition-all duration-300 focus:outline-none active:scale-95';
  const variants = {
    primary:
      'bg-[#3396FF] text-white hover:bg-[#1E2A44] shadow-md hover:shadow-lg',
    secondary:
      'bg-transparent border border-[#0F1729] text-[#0F1729] hover:bg-[#0F1729] hover:text-white',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
