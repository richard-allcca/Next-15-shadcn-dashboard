"use client"


import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [progress])

  return (
    <Progress
    value={progress}
    className="w-[60%]"
    indicatorColor={
      cn(
        progress < 30 ? "bg-red-500" : "",
        progress >= 30 && progress < 60 ? "bg-yellow-500" : "",
        progress >= 60 ? "bg-green-500" : "",
      )
    } />
  )
}
