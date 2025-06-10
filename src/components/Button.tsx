import { MdArrowForward } from "react-icons/md";
import "./scss/Button.scss";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  onClick,
  disabled = false,
  children,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        disabled ? `feed-btn ${variant} disabled` : `feed-btn ${variant}`
      }
    >
      {children} <MdArrowForward />
    </button>
  );
};

export default Button;
