import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-button hover:bg-white hover:text-primary hover:shadow-button-hover",
        destructive: "bg-destructive text-destructive-foreground shadow-button hover:bg-white hover:text-destructive hover:shadow-button-hover",
        outline: "border-2 border-primary bg-transparent text-primary shadow-button hover:bg-white hover:text-primary hover:shadow-button-hover",
        secondary: "bg-secondary text-secondary-foreground shadow-button hover:bg-white hover:text-secondary hover:shadow-button-hover",
        ghost: "hover:bg-white hover:text-primary hover:shadow-soft",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        hero: "bg-gradient-hero text-primary-foreground shadow-glow hover:bg-white hover:text-primary hover:shadow-button-hover transform hover:scale-105",
        accent: "bg-gradient-accent text-accent-foreground shadow-button hover:bg-white hover:text-accent hover:shadow-button-hover transform hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
