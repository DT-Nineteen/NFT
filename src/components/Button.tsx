import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { loading, disabled, children, ...rest } = props;

  return (
    <button
      className="h-12 rounded-lg bg-blue-800 px-4 py-2 text-xl font-semibold text-white"
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Busy..." : children}
    </button>
  );
};

export default Button;
