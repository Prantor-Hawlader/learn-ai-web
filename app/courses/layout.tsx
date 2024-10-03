import SidebarDemo from "@/components/ui/SidebarDemo";
import { cn } from "@/lib/utils";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700",
        "h-[30rem]"
      )}
    >
      <SidebarDemo />
      <section className="flex flex-1 overflow-y-auto max-h-[40rem]">
        <div className="flex flex-col gap-2 flex-1 w-full">{children}</div>
      </section>
    </div>
  );
}
