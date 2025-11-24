import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import { tv } from "tailwind-variants";

const className = tv({
  base: "rounded-md p-2 overflow-hidden",
  variants: {
    size: {
      sm: "rounded-sm p-1",
      md: "rounded-md p-2",
      lg: "rounded-lg p-3",
    },
    noPadding: {
      true: "p-0",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    size: "md",
    noPadding: false,
  },
});

interface IProps extends HTMLMotionProps<"div"> {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  noPadding?: boolean;
}

export const Card = ({
  size = "md",
  fullWidth = false,
  noPadding = false,
  className: classNameProp,
  children,
  ...props
}: IProps) => {
  const styleProps = { size, noPadding, fullWidth };
  return (
    <motion.div
      {...props}
      className={className({ ...styleProps, class: classNameProp })}
    >
      {children}
    </motion.div>
  );
};
