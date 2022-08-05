import Image from "next/image";
import Link from "next/link";
import React from "react";

const Avatar = () => <h1>avatar</h1>;

const Navbar = () => {
  return (
    <div className="wrapper py-10 flex justify-between items-center">
      {/* <Link href="/" passHref> */}
      {/* <Image
          src="/static/brand/return0-logo.png"
          width="100"
          height="60"
          alt=""
        /> */}
      {/* </Link> */}
      <div className="rounded-full-img">
        <Image src="/static/images/profile.jpg" width={50} height={50} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
