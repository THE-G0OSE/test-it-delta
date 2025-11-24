import { type HTMLMotionProps, motion } from "motion/react";
import { tv } from "tailwind-variants";

const className = tv({
  base: "rounded-md border",
  variants: {
    color: {
      primary: "bg-white border-neutral-200 text-black",
      accent: "bg-indigo-500 border-0 text-white"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-2 text-lg",
    },
    fullWidth: {
      true: "w-full"
    }
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1 ",
    },
  ],
});


interface IProps extends HTMLMotionProps<"button"> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "accent";
  fullWidth?: boolean
}


export const Button = ({
  size = "md",
  color = "primary",
  className: classNameProp,
  fullWidth = false,
  children,
  ...props
}: IProps) => {
  const styleProps = { size, color, fullWidth };

  return (
    <motion.button
      {...props}
      className={className({ ...styleProps, class: classNameProp })}
    >
      {children}
    </motion.button>
  );
};
