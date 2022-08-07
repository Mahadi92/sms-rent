import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "../dashboard/Sidebar";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useWindowSize from "@/hooks/useWindowSize";

interface PropType {
  children: JSX.Element | JSX.Element[];
}

const DashboardLayout: React.FC<PropType> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1024) {
      setIsMobileOpen(false);
    } else {
      setIsMobileOpen(true);
    }
  }, [windowSize.width]);

  return (
    <>
      <Navbar />
      <main className={`flex relative`}>
        <div className={`fixed lg:relative w-60 lg:w-2/12`}>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex lg:hidden justify-center items-center bg-gray-700 text-white w-8 h-8 rounded-md"
          >
            {!isMobileOpen ? <RightOutlined /> : <LeftOutlined />}
          </button>
          <div
            className={`${
              !isMobileOpen
                ? "-translate-x-60 lg:translate-x-0"
                : "translate-x-0"
            } ${
              !isOpen ? "w-full lg:w-20" : "w-auto"
            } transition ease-in-out delay-150`}
          >
            <Sidebar
              isOpen={windowSize.width >= 1024 ? isOpen : true}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
        <div className="w-full lg:w-10/12 wrapper">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
