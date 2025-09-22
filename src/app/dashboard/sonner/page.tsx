"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: new Date().toLocaleDateString('es-Es', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            position: "top-right"
          })
        }
      >
        Toast Basic
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: new Date().toLocaleDateString('es-Es', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            position: "top-left"
          })
        }
      >
        Show Success
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: new Date().toLocaleDateString('es-Es', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            position: "bottom-left"
          })
        }
      >
        Show Warning
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.error("Event has been created", {
            description: new Date().toLocaleDateString('es-Es', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            position: "bottom-right"
          })
        }
      >
        Show Error
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.info("Event has been created", {
            description: new Date().toLocaleDateString('es-Es', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            position: "bottom-center"
          })
        }
      >
        Show Info
      </Button>
    </div>
  )
}
