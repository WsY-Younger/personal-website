import * as React from "react";
import { clsx } from "clsx";

type TabsContextType = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextType | null>(null);

export function Tabs({ defaultValue, className, children }: { defaultValue: string; className?: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState(defaultValue);
  return <div className={className}><TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider></div>;
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("inline-flex gap-2 bg-slate-100 p-1 rounded-lg", className)} {...props} />;
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)!;
  const active = ctx.value === value;
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={clsx(
        "px-3 py-1.5 rounded-md text-sm",
        active ? "bg-white shadow border border-slate-200" : "text-slate-600 hover:text-slate-900"
      )}
      aria-selected={active}
      role="tab"
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)!;
  if (ctx.value !== value) return null;
  return <div className={clsx(className)}>{children}</div>;
}