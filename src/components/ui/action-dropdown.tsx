import {
  BinOutlineIcon,
  PenOutlineIcon,
  ThreeDotIcon,
} from "@public/assets/Icons";
import Link from "next/link";
import { Dropdown } from "rizzui";

interface Props {
  editLink: string;
  deleteLink: string;
}

export default function ActionDropdown({ editLink, deleteLink }: Props) {
  return (
    <Dropdown placement="bottom-end" className={"cursor-pointer"}>
      <Dropdown.Trigger>
        <ThreeDotIcon w="20" h="20" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link href={editLink} className="flex gap-3 items-center">
            <PenOutlineIcon w="16" h="16" />
            <h2 className="text-sm font-medium text-gray-dark">Edit</h2>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="flex gap-3">
          <Link href={deleteLink} className="flex gap-3 items-center">
            <BinOutlineIcon w="16" h="16" />
            <h2 className="text-sm font-medium text-gray-dark">Delete</h2>
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
