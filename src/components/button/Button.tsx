import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

export type ButtonVariantProps = VariantProps<typeof button>;

const button = cva(
  "rounded-md py-2 px-4 flex items-center justify-center gap-4 border-2 border-transparent",
  {
    variants: {
      variant: {
        primary:
          "  bg-blue-600 text-gray-100 border-2 border-transparent hover:bg-blue-700 transition-all duration-300",
      },
      size: {
        large: "w-full",
        small: "",
        medium: "",
      },
    },

    defaultVariants: {
      size: "large",
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "suffix" | "prefix">,
    ButtonVariantProps {
  label: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Button = ({
  label,
  variant,
  prefix,
  suffix,
  size,
  ...props
}: ButtonProps) => {
  const { className } = props;
  return (
    <button
      className={`${cn(button({ variant, size }))} ${className}`}
      {...props}
    >
      {prefix}
      <span>{label}</span>
      {suffix}
    </button>
  );
};
