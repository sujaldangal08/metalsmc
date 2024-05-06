"use client";

import { Avatar } from "@/components/ui/avatar";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { Popover } from "@/components/ui/popover";
import { Text, Title } from "@/components/ui/text";
import { routes } from "@/config/routes";
import { getUserDetails } from "@/features/api/user";
import { UserResponse } from "@/features/api/user/types";
import { logout } from "@/lib/auth";
import { Route } from "@/lib/enums/routes.enums";
import cn from "@/utils/class-names";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const menuItems = [
  {
    name: "My Profile",
    href: routes.profile,
  },
  {
    name: "Account Settings",
    href: routes.forms.profileSettings,
  },
  {
    name: "Activity Log",
    href: "#",
  },
];

function DropdownMenu({ user }: { user: UserResponse["data"] }) {
  const router = useRouter();

  const handleSignout = () => {
    logout();
    router.push(Route.Login);
  };

  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="flex items-center border-b border-gray-300 px-6 pb-5 pt-6">
        <Avatar src={user.image} name={user.name} />
        <div className="ms-3">
          <Title as="h6" className="font-semibold">
            {user?.name}
          </Title>
          <Text className="text-gray-600">
            {user.email.replace(/^(.)(.*?)(..)@/, "$1...$3@")}
          </Text>
        </div>
      </div>
      <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button
        onClick={() => handleSignout()}
        className="block w-full font-medium hover:text-black border-t border-gray-300 text-left px-6 pt-3 pb-4"
      >
        Sign Out
      </button>
    </div>
  );
}

export default function ProfileMenu({
  buttonClassName,
  avatarClassName,
}: {
  buttonClassName?: string;
  avatarClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: user, isLoading } = useSWR("user", getUserDetails);

  console.log(user);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement="bottom-end"
    >
      <Popover.Trigger>
        <button
          className={cn(
            "w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10",
            buttonClassName
          )}
        >
          <Avatar
            src={user?.data.image}
            name={user?.data.name || "user"}
            className={cn("!h-9 w-9 sm:!h-10 sm:w-10", avatarClassName)}
          />
        </button>
      </Popover.Trigger>

      <Popover.Content className="z-[9999] p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
        <DropdownMenu user={user?.data!} />
      </Popover.Content>
    </Popover>
  );
}
