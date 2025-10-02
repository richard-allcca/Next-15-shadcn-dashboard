"use client";

import { Payment } from "@/data/payment.data";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",
    header: "Client Name"
  },
  {
    accessorKey: "status",
    // header: "Status",
    header: () => <div className="text-center">Status</div>,
    // NOTE - Method 1: Using to assign a className based on status value
    // cell: ({ row }) => {
    //   const status = row.getValue("status") as Payment["status"];
    //   const statusColors: Record<Payment["status"], string> = {
    //     pending: "bg-yellow-100 text-yellow-800",
    //     processing: "bg-blue-100 text-blue-800",
    //     success: "bg-green-100 text-green-800",
    //     failed: "bg-red-100 text-red-800",
    //   };

    //   return (
    //     <div className="flex justify-center">
    //       <span
    //         className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[status]}`}
    //       >
    //         {status}
    //       </span>
    //     </div>
    //   );
    // }
    // NOTE - Method 2: Using a Badge component to display status
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"];
      const statusVariants: Record<Payment["status"], "success" | "warning" | "info" | "destructive" | "default"> = {
        pending: "warning",
        processing: "info",
        success: "success",
        failed: "destructive",
      };

      // Fallback to "default" if status is not in statusVariants
      const variant = statusVariants[status] ?? "default";

      return (
        <div className="flex justify-center">
          <Badge variant={variant} capitalize>
            {status}
          </Badge>
        </div>
      );
    }
  },
  {
    accessorKey: "amount",
    // header: "Amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    // header: "Email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    // header: 'Actions',
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast.success("Payment ID copied to clipboard", {
                  position: "top-right",
                });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];