import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

type AppTitleVariants = VariantProps<typeof appTitle>;

const appTitle = cva("leading-[0.5rem] text-center", {
  variants: {
    variant: {
      primary: "text-zinc-800",
    },
    size: {
      large: "text-2xl font-bold",
      medium: "text-xl font-medium mb-2",
      small: "text-lg font-semibold",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

interface AppTitleProps
  extends React.ComponentProps<"h1" | "h2" | "h3" | "h4">,
    AppTitleVariants {
  headingLevel?: "h1" | "h2" | "h3" | "h4";
  title: string;
}

const AppTitle = ({
  headingLevel = "h2",
  title,
  variant,
  size,
  className,
  ...props
}: AppTitleProps) => {
  const Heading = headingLevel;
  return (
    <Heading
      className={`${cn(appTitle({ variant, size }))} ${className}`}
      {...props}
    >
      {title}
    </Heading>
  );
};

export default AppTitle;
