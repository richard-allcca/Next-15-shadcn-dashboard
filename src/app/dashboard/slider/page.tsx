'use client'

import { useState } from "react";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export default function Page({ className }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(10)
  const [rangeValue, setRangeValue] = useState([10,20])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-3">
        <span>Slider value: {sliderValue} </span>
        <Slider
          defaultValue={[sliderValue]}
          max={100}
          step={1}
          onValueChange={(value) => setSliderValue(value[0])}
          className={cn("w-[100%]", className)}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <span>Slider value: {rangeValue.join(',')} </span>
        <Slider
          defaultValue={rangeValue}
          max={100}
          step={1}
          onValueChange={(value) => setRangeValue(value)}
          className={cn("w-[100%]", className)}
        />
      </div>
    </div>
  )
}
