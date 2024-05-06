import cn from "@/utils/class-names";

interface Props {
  status: "success" | "failure" | "warning";
  className?: string;
  dotSize?: "small" | "medium" | "large";
  title?: string;
}

export default function Status({
  className,
  status,
  dotSize = "medium",
  title,
}: Props) {
  let size = 3;
  if (dotSize == "medium") {
    size = 3;
  } else if (dotSize == "large") {
    size = 4;
  } else if (dotSize == "small") {
    size = 2;
  }
  if (status == "success") {
    return (
      <div className={cn("flex gap-3 items-center", className)}>
        <div
          className={cn("bg-green rounded-full", `w-${size} h-${size}`)}
        ></div>
        <h3 className="text-md text-green font-normal">{title}</h3>
      </div>
    );
  } else {
    return (
      <div className={cn("flex gap-3 items-center", className)}>
        <div className={cn("bg-red rounded-full", `w-${size} h-${size}`)}></div>
        <h3 className="text-md text-red font-normal">{title}</h3>
      </div>
    );
  }
}
