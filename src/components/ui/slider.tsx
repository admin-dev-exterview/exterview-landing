"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  value: number[];
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    value={value}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-5 w-full grow overflow-hidden rounded-full bg-[#0e6cf6]/10">
      <SliderPrimitive.Range className="absolute h-full bg-[#fff]/10" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block relative h-6 w-6 rounded-full border bg-white border-white/50 shadow shadow-[#0e6cf6]/40 transition-colors focus-visible:outline-none focus-visible:ring-1 outline-[#0e6cf6] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-black bg-white border font-semibold px-3 py-2 rounded-xl">
        {value[0]}
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
