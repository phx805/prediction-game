import { ButtonHTMLAttributes, FC } from "react";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  // onClick: () => void;
}

const Button: FC<ButtonPropsType> = ({ text, ...rest }) => {
  return (
    <button type="button" className="button" {...rest}>
      {text}
    </button>
  );
};

export default Button;
