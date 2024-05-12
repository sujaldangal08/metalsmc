import React from "react";
import cn from "@/utils/class-names";
import Link from "next/link";

export type BreadcrumbItemProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const BreadcrumbItem = ({
  href = "#",
  className,
  children,
}: BreadcrumbItemProps) => (
  <Link
    href={href}
    role="button"
    className={cn("inline-flex items-center gap-2 text-sm", className)}
  >
    {children}
  </Link>
);

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  separator?: React.ReactNode;
  disableCurrent?: boolean;
  children: React.ReactNode;
  className?: string;
  separatorClassName?: string;
  separatorVariant?: "default" | "circle";
}

const Breadcrumb = ({
  separator = ".",
  disableCurrent = true,
  children,
  className,
  separatorClassName,
  separatorVariant = "circle",
}: BreadcrumbProps) => {
  const numOfItems = React.Children.count(children);

  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<BreadcrumbItemProps>(child)) return child;

        return (
          <>
            {React.cloneElement(child, {
              className: cn(
                "text-gray-500 last:text-black font-normal text-sm",
                disableCurrent && "last:pointer-events-none"
              ),
            })}
            {index < numOfItems - 1 &&
              (separatorVariant === "default" ? (
                <span
                  className={cn("text-md text-gray-700", separatorClassName)}
                >
                  {separator}
                </span>
              ) : (
                <span className="h-[6px] w-[6px] rounded-full bg-gray-400" />
              ))}
          </>
        );
      })}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.displayName = "Breadcrumb";
export default Breadcrumb;
