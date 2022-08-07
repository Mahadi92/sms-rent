import type { MenuProps } from "antd";
import { Menu } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PropType {
  isOpen: boolean;
  setIsOpen: any;
}

const items = [
  {
    key: "0",
    label: "User",
    link: "/dashboard/user",
    icon: <HiOutlineUser />,
  },
  {
    key: "1",
    label: "Add Provider",
    link: "/dashboard/addprovider",
    icon: <MdOutlineWorkOutline />,
  },
  {
    key: "2",
    label: "Add Country",
    link: "/",
    icon: <BiWorld />,
  },
  {
    key: "3",
    label: "Add Services",
    link: "/",
    icon: <MdOutlineMiscellaneousServices />,
  },
];

const Sidebar: React.FC<PropType> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  return (
    <div className={`sticky top-0 transform duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex justify-center items-center bg-blue-100 text-gray-800 w-8 h-8 rounded-md"
      >
        {isOpen ? <RightOutlined /> : <LeftOutlined />}
      </button>

      <ul className="dashboard-sidebar-items">
        {items.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.link} passHref>
                <a
                  className={`${
                    router.pathname === item.link
                      ? "dashboard-sidebar-item-active"
                      : "text-slate-600"
                  }`}
                >
                  {item.icon}
                  <span className={`${!isOpen && "hidden"}`}>{item.label}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
