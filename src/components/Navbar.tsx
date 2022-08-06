import Image from "next/image";
import Link from "next/link";
import React from "react";

const Avatar = () => <h1>avatar</h1>;

const Navbar = () => {
  return (
    <nav className="bg-gray-300/20 wrapper py-5 flex justify-between items-center">
      <Link href="/" passHref>
        {/* <Image
          src="/static/brand/return0-logo.png"
          width="100"
          height="60"
          alt=""
        /> */}
        <a className="text-3xl">LOGO</a>
      </Link>
      <div className="rounded-full-img">
        <Image src="/static/images/profile.jpg" width={50} height={50} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
