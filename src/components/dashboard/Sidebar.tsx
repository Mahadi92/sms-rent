import type { MenuProps } from "antd";
import { Menu } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

interface PropType {
  isOpen: boolean;
  setIsOpen: any;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("User", "0", <HiOutlineUser />),
  getItem("Add Provider", "1", <MdOutlineWorkOutline />),
  getItem("Add Country", "2", <BiWorld />),
  getItem("Add Services", "3", <MdOutlineMiscellaneousServices />),
];

const Sidebar: React.FC<PropType> = ({ isOpen, setIsOpen }) => {
  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <div className={`sticky top-0 transform duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex justify-center items-center bg-red-700 text-white w-8 h-8 rounded-md"
      >
        {isOpen ? <RightOutlined /> : <LeftOutlined />}
      </button>

      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={!isOpen}
        items={items}
        onSelect={(e) => handleSelect(e)}
      />
    </div>
  );
};

export default Sidebar;
