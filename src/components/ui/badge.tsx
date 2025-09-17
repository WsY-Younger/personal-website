import * as React from "react";
import { clsx } from "clsx";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx("inline-flex items-center rounded-full bg-slate-100 text-slate-900 border border-slate-200 text-xs font-medium px-2.5 py-1", className)} {...props} />;
}