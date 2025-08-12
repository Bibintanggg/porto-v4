import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ title, children, className }: CardProps) {
  return (
    <div
      className={`bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-md  transition-transform duration-200 ${className}`}
    >
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
