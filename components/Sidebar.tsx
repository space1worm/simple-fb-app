import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { CalendarIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/solid";

import SidebarRow from "./SidebarRow";

export default function Sidebar(): JSX.Element {
  return (
    <div className="sm:p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={ClockIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Evets" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}
