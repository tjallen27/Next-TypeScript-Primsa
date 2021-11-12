import { Wrapper } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  variant: "primary" | "secondary";
}

const Button = ({ children, handleClick, variant }: ButtonProps) => {
  return (
    <Wrapper
      type="button"
      aria-expanded="false"
      onClick={handleClick}
      variant={variant}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
