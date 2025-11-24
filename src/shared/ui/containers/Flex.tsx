import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { tv } from "tailwind-variants";

const className = tv({
  base: "flex",
  variants: {
    direction: {
      col: "flex-col",
      row: "flex-row",
    },
    justify: {
      end: "justify-end",
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    gap: {
      sm: "gap-3",
      md: "gap-5",
      lg: "gap-7",
    },
    fullWidth: {
      true: "w-full"
    }
  },
});

export interface IFlexProps extends HTMLMotionProps<"div"> {
  direction?: "col" | "row";
  justify?: "end" | "start" | "center" | "between" | "around" | "evenly";
  align?: "center" | "end" | "start";
  gap?: "sm" | "md" | "lg";
  fullWidth?: boolean
}

export const Flex = ({
  direction = "row",
  gap = "md",
  justify = "start",
  align = "start",
  children,
  fullWidth = false,
  className: classNameProp,
  ...props
}: IFlexProps) => {
  const styleProps = { direction, justify, align, gap, fullWidth };
  return (
    <motion.div
      {...props}
      className={className({ ...styleProps, class: classNameProp })}
    >
      {children}
    </motion.div>
  );
};
