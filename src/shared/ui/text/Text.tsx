import { motion } from "motion/react";
import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const className = tv({
  variants: {
    font: {
      main: "font-[Inter]"
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      white: "text-white",
      black: "text-black",
      red: "text-red-500",
      "gray-700": "text-gray-700",
      "gray-500": "text-gray-500"
    },
    weight: {
      bold: "font-bold",
      semibold: "font-semibold",
      normal: "font-normal",
    },
    italic: {
      true: "italic",
    },
  },
});

interface IProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "white" | "black" | "red" | 'gray-700' | "gray-500";
  weight?: "bold" | "semibold" | "normal";
  font?: "main",
  italic?: boolean;
  children: ReactNode;
  className?: string;
}

export const Text = ({
  size = "md",
  color = "black",
  weight = "normal",
  italic = false,
  font = "main",
  children,
  className: classNameProp,
}: IProps) => {
  const styleProps = { size, color, weight, italic, font };
  return (
    <motion.p className={className({ ...styleProps, class: classNameProp })}>
      {children}
    </motion.p>
  );
};
