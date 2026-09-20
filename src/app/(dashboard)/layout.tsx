import type { ReactNode } from "react";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen bg-background text-foreground lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-border bg-surface p-4">
        <p className="mb-6 text-sm font-semibold text-foreground">
          NusaCargo Control Tower
        </p>

        <SidebarNav />

        <div className="mt-6">
          <ThemeToggle />
        </div>
      </aside>

      <main className="bg-background p-6 text-foreground">{children}</main>
    </div>
  );
}