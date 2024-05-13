import cn from "@/utils/class-names";

interface Props {
  className?: string;
  dotSize?: "small" | "medium" | "large";
  status: string;
  title: string;
}

const formatString = (input: string): string =>
  input
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getDotSize = (size: "small" | "medium" | "large"): number => {
  const sizeMap = { small: 2, medium: 3, large: 4 };
  return sizeMap[size] || 3;
};

const statusMap = {
  success: ["active", "done", "completed"],
  failure: ["inactive", "cancelled", "dull"],
  warning: ["in_progress", "uploading", "pending"],
};

const getStatusColor = (status: string): "green" | "red" => {
  if (statusMap.success.includes(status)) return "green";
  if (statusMap.failure.includes(status)) return "red";
  return "red";
};

export default function Status({
  className,
  status,
  title,
  dotSize = "medium",
}: Props) {
  const color = getStatusColor(status);
  const size = getDotSize(dotSize);

  return (
    <div className={cn("flex gap-3 items-center", className)}>
      <div
        className={cn(`bg-${color} rounded-full`, `w-${size} h-${size}`)}
      ></div>
      <h3
        className={cn(
          `text-${color} font-normal`,
          dotSize == "small"
            ? "text-[14px]"
            : dotSize == "medium"
              ? "text-[16px]"
              : "text-[18px]"
        )}
      >
        {formatString(title)}
      </h3>
    </div>
  );
}
