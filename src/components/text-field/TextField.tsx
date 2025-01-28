"use client";

import { cn } from "@/utils/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React, { useId } from "react";

const labelStyle = cva("text-[16px] cursor-pointer", {
  variants: {
    labelVariants: {
      default: "text-zinc-600",
      secondary: "text-gray-200",
    },
  },

  defaultVariants: {
    labelVariants: "default",
  },
});

type LabelVariantProps = VariantProps<typeof labelStyle>;

const inputStyle = cva(" py-2 px-4 w-full text-gray-700 placeholder:text-sm", {
  variants: {
    variant: {
      default:
        "border focus:outline-none focus:border focus:border-gray-400  rounded-md transition-all ",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

type InputVariantProps = VariantProps<typeof inputStyle>;
interface LabelProps extends React.ComponentProps<"label">, LabelVariantProps {
  label?: string;
}

interface TextFieldProps
  extends Omit<React.ComponentProps<"input">, "ref">,
    InputVariantProps {
  label?: string;
  asChild?: boolean;
  labelProps?: LabelProps;
  helperText?: string | null;
}

const TextField = React.forwardRef(
  (
    {
      label,
      asChild,
      variant,
      labelProps: rawLabelProps = {},
      helperText,
      ...props
    }: TextFieldProps,
    ref
  ) => {
    const id = useId();
    const Comp = asChild ? Slot : "input";
    const {
      className: labelClassName,
      labelVariants,
      ...labelProps
    } = rawLabelProps;

    return (
      <div className="h-[4.2rem]">
        {label && (
          <label
            htmlFor={id}
            className={`${cn(labelStyle({ labelVariants }))} ${labelClassName}`}
            {...labelProps}
          >
            {label}
          </label>
        )}
        <div>
          <Comp
            id={id}
            ref={ref as never}
            className={cn(inputStyle({ variant }))}
            {...props}
          />
          {helperText && (
            <p className={"text-rose-500 text-[0.8rem] -mt-[0.3rem"}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
