import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-full bg-orange-500 px-6 py-3 text-white font-medium
      hover:bg-orange-600 transition cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
