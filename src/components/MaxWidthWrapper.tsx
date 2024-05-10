import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("h-full max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
