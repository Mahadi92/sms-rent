import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "../dashboard/Sidebar";

interface PropType {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout: React.FC<PropType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="wrapper">{children}</div>
      </main>
    </>
  );
};

export default DefaultLayout;
