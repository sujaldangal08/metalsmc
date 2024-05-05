import cn from "@/utils/class-names";

interface Props {
  isAvailable?: boolean;
  className?: string;
}

export default function Status({ className, isAvailable }: Props) {
  if (isAvailable) {
    return (
      <div className={cn("flex gap-3 items-center", className)}>
        <div className="bg-green w-2 h-2 rounded-full"></div>
        <h3 className="text-md text-green font-normal">Available</h3>
      </div>
    );
  } else {
    return (
      <div className={cn("flex gap-3 items-center", className)}>
        <div className="bg-red w-2 h-2 rounded-full"></div>
        <h3 className="text-md text-red font-normal">Unavailable</h3>
      </div>
    );
  }
}
