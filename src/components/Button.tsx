import { MdArrowForward, MdArrowBack } from "react-icons/md";
import "./scss/Button.scss";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  iconDirection?: "forward" | "backward";
  iconPosition?: "before" | "after";
}

const Button = ({
  onClick,
  disabled = false,
  children,
  variant = "primary",
  iconDirection = "forward",
  iconPosition = "after",
}: ButtonProps) => {
  const Icon = iconDirection === "backward" ? MdArrowBack : MdArrowForward;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={
        disabled
          ? `feed-btn ${variant} disabled`
          : `feed-btn ${variant} icon-${iconPosition}`
      }
      disabled={disabled}
    >
      {iconPosition === "before" && <Icon style={{ marginRight: 6 }} />}
      {children}
      {iconPosition === "after" && <Icon style={{ marginLeft: 6 }} />}
    </motion.button>
  );
};

export default Button;
