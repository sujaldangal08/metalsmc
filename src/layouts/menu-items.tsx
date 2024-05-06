import { Route } from "@/lib/enums/routes.enums";
import {
  DashboardIcon,
  AdminManagementIcon,
  UserIcon,
  DriverManagementIcon,
  StaffManagementIcon,
  InventoryManagementIcon,
} from "@public/assets/Icons";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label end
  {
    name: "Dashboard",
    href: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Admin Management",
    href: "#",
    icon: <AdminManagementIcon />,
  },
  {
    name: "Customer Management",
    icon: <UserIcon />,
    href: "/customer",
  },
  {
    name: "Driver Management",
    href: "/driver",
    icon: <DriverManagementIcon />,
    dropdownItems: [{ name: "Driver Management", href: "/driver/management" }],
  },
  {
    name: "Staff Management",
    href: "/staff",
    icon: <StaffManagementIcon />,
    dropdownItems: [{ name: "Staff Management", href: "/staff/management" }],
  },
  {
    name: "Inventory Management",
    href: "#",
    icon: <InventoryManagementIcon />,
    dropdownItems: [],
  },
  {
    name: "Assets Management",
    href: "/",
    icon: <DashboardIcon />,
    dropdownItems: [],
  },
  {
    name: "Ticket Management",
    href: "#",
    icon: <AdminManagementIcon />,
    dropdownItems: [],
  },
  {
    name: "Delivery & Pickups",
    href: "/",
    icon: <DashboardIcon />,
    dropdownItems: [
      { name: "Delivery Schedule", href: Route.DeliverySchedule },
      { name: "Pickup Schedule", href: Route.PickupSchedule },
    ],
  },
  {
    name: "Sales",
    href: "#",
    icon: <AdminManagementIcon />,
    dropdownItems: [],
  },
  { name: "Pages" },
  {
    name: "About",
    href: "/about",
    icon: <DashboardIcon />,
  },
  {
    name: "Communication",
    href: "#",
    icon: <AdminManagementIcon />,
  },
  {
    name: "FAQs",
    href: "/FAQ",
    icon: <DashboardIcon />,
  },
  {
    name: "Social Media Management",
    href: "#",
    icon: <AdminManagementIcon />,
  },
  {
    name: "Terms & Condition",
    href: "#",
    icon: <AdminManagementIcon />,
  },
  { name: "Authentication" },
  {
    name: "Settings",
    href: "#",
    icon: <AdminManagementIcon />,
  },
  {
    name: "Logout",
    href: "#",
    icon: <AdminManagementIcon />,
  },
];
