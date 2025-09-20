import { Button } from "@/components/ui/button";
import { ChevronRightIcon, GitBranch, Loader2Icon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button variant='default'capitalize >default capitalize</Button>
      <Button variant='destructive' >destructive</Button>
      <Button variant='ghost' >ghost</Button>
      <Button variant='link' >link</Button>
      <Button variant='outline' >outline</Button>
      <Button variant='secondary' >secondary</Button>
      <Button variant='success' >success</Button>
      <Button disabled >disabled</Button>

      <Button variant="secondary" size="icon" className="size-8">
        <ChevronRightIcon />
      </Button>

      <Button size="sm" disabled>
        <Loader2Icon className="animate-spin" />
        Please wait
      </Button>

      <Button variant="outline" size="sm">
        <GitBranch /> New Branch
      </Button>
    </div>
  );
}
