import { HomeIcon } from "lucide-react";
import { v4 as uuid } from "uuid";
import { TbSettingsAutomation } from "react-icons/tb";
import { IoMdRocket } from "react-icons/io";
import { MdSettingsSuggest } from "react-icons/md";
import { CiWavePulse1 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const Sidebar_menu: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <IoHomeOutline className="w-5 h-5" />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <CiWavePulse1 className="h-5 w-5" />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <IoMdRocket className="h-5 w-5" />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <MdSettingsSuggest className="h-5 w-5" />,
  },
];
