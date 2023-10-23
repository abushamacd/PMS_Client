import Image from "next/image";
import React from "react";
import main_logo from "../../../public/main_logo.png";
import logo from "../../../public/text_logo.png";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication || Mind Expo ",
  description: "Manage Your Project Efficent Way",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout flex flex-col md:flex-row justify-center items-center gap-4 h-screen">
      <div className="md:w-1/2 p-5 flex justify-center items-center">
        <Link href={"/"}>
          <div className="hidden md:block">
            <Image src={main_logo} width={600} alt="login image" />
          </div>
          <div className="md:hidden block">
            <Image src={logo} width={300} alt="login image" />
          </div>
        </Link>
      </div>
      <div className="md:w-1/2 w-full p-5 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
