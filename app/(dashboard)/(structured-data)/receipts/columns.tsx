"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Status } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type Receipt = {
  id: string;
  extractionId: string;
  extraction: {
    filename: string;
  };
  category: "retail" | "groceries" | "restaurant" | "cafe" | "other";
  from: string;
  total: number;
  number: string | null;
  date: Date | null;
  createdAt: Date;
};

export const categories = [
  {
    value: "retail",
    label: "Retail",
    textClass: "text-violet-500",
    borderClass: "border-violet-400",
  },
  {
    value: "groceries",
    label: "Groceries",
    textClass: "text-pink-500",
    borderClass: "border-pink-400",
  },
  {
    value: "restaurant",
    label: "Restaurant",
    textClass: "text-cyan-500",
    borderClass: "border-cyan-400",
  },
  {
    value: "cafe",
    label: "Cafe & Bar",
    textClass: "text-cyan-800",
    borderClass: "border-cyan-800",
  },
  {
    value: "other",
    label: "Other",
    textClass: "text-gray-500",
    borderClass: "border-gray-400",
  },
];

async function deleteExtraction(uuid: string) {
  const res = await fetch(`/api/delete/extraction?uuid=${uuid}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export const columns: ColumnDef<Receipt>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => {
      const value = row.original.number === "" ? "None" : row.original.number;
      return (
        <div
          title={row.getValue("number")}
          className={cn(
            value === "None"
              ? "text-slate-400"
              : "2xl:w-full 2xl:max-w-3xl truncate overflow-hidden text-slate-900",
            "w-16"
          )}
        >
          {value}
        </div>
      );
    },
  },
  {
    id: "category",
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = categories.find(
        (category) => category.value === row.original.category
      );
      return (
        <div className="w-24">
          <Badge
            className={cn("py-1", category?.textClass, category?.borderClass)}
            variant={"outline"}
          >
            {category?.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "from",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="From" />
    ),
    cell: ({ row }) => (
      <div
        title={row.getValue("from")}
        className="w-40 2xl:w-full 2xl:max-w-3xl truncate overflow-hidden text-slate-900"
      >
        {row.getValue("from")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    // cell: ({ row }) => (
    //   <div className="w-32 text-slate-900">
    //     {row.getValue<Date>("date").toLocaleDateString("en-GB")}
    //   </div>
    // ),
    cell: ({ row }) => (
      <div
        title={row.getValue("date")}
        className={cn(
          row.original.date === null ? "text-slate-400" : " text-slate-900",
          "w-32"
        )}
      >
        {row.original.date === null
          ? "None"
          : row.getValue<Date>("date").toLocaleDateString("en-GB")}
      </div>
    ),
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => (
      <div
        title={row.getValue("total")}
        className="w-20 2xl:w-full 2xl:max-w-3xl truncate overflow-hidden text-slate-900"
      >
        {row.getValue("total")}
      </div>
    ),
  },
  {
    id: "filename",
    accessorFn: (row) => row.extraction.filename,
    accessorKey: "filename",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="File Name" />
    ),
    cell: ({ row }) => (
      <div
        title={row.getValue("filename")}
        className="w-32 2xl:w-full 2xl:max-w-3xl truncate overflow-hidden text-slate-900"
      >
        {row.getValue("filename")}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Extraction Date" />
    ),
    cell: ({ row }) => (
      <div className="w-32 text-slate-900">
        {row.getValue<Date>("createdAt").toLocaleDateString("en-GB")}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ table, row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-slate-100"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem className="cursor-pointer">
                <AlertDialogTrigger asChild>
                  <div className="flex items-center w-full">
                    <Trash className="mr-2 h-3.5 w-3.5 text-slate-900/70" />
                    Delete
                  </div>
                </AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Receipt</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure? This will permanently delete the current receipt
                and remove its associated file and extraction. This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  await deleteExtraction(row.original.extractionId);
                  router.refresh();
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];
