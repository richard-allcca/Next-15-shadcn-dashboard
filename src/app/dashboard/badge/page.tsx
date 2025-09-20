'use client'

import { Badge } from "@/components/ui/badge";


export default function Page() {
  return (
    <div className="flex gap-2">
      <Badge variant={'default'} >default</Badge>
      <Badge variant={'destructive'} >destructive</Badge>
      <Badge variant={'outline'} >outline</Badge>
      <Badge variant={'secondary'} >secondary</Badge>
      <Badge variant={'info'} >info</Badge>
      <Badge variant={'success'} >success</Badge>
      <Badge variant={'warning'} >warning</Badge>
      <Badge variant={'light'} >light</Badge>
      <Badge variant={'light'} capitalize >light capitalize</Badge>
    </div>
  )
}
