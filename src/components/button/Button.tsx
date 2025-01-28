import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

export type ButtonVariantProps = VariantProps<typeof button>;

const button = cva(
  "rounded-md flex items-center justify-center gap-4 border-2 border-transparent transition-all duration-300  text-gray-100 disabled:bg-zinc-400",
  {
    variants: {
      variant: {
        primary: "bg-blue-600  hover:bg-blue-700 ",
        secondary: "bg-green-600 hover:bg-green-700",
        destructive: "bg-red-600 hover:bg-red-700",
      },
      size: {
        large: "w-full py-2 px-4 ",
        small: "px-4",
        medium: "px-2 py-2 w-[8rem]",
      },
    },

    defaultVariants: {
      size: "large",
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    ButtonVariantProps {
  label: string;
}

export const Button = ({ label, variant, size, ...props }: ButtonProps) => {
  const { className } = props;
  return (
    <button
      className={`${cn(button({ variant, size }) + " " + className)} `}
      {...props}
    >
      {label}
    </button>
  );
};
