"use client";
import Image from "next/image";
import { useState } from "react";

type NavLinkProps = {
  text: string;
  href: string;
  isActive: boolean;
};

const NavLink = ({ text, href, isActive }: NavLinkProps) => {
  return (
    <a
      href={href}
      rel="preload"
      className={`${
        isActive
          ? "text-primary border-solid border-b-[1px] border-primary"
          : "text-white hover:text-primary hover:border-solid hover:border-b-[1px] hover:border-primary"
      }`}
    >
      {text}
    </a>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full fixed top-0 h-[90px] bg-dark flex items-center justify-between z-10">
      <div className="max-w-[1540px] w-full mx-auto px-[20px] flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <Image
            className="object-cover"
            src="/RemontPlay-logo.svg"
            alt="Remont play logo"
            width={40}
            height={40}
            priority
          />
          <p className="font-medium">Remont play</p>
        </div>
        <div className="sm:flex hidden gap-[20px]">
          <NavLink text={"Клиенту"} href={"/client"} isActive={true} />
          <NavLink text={"Партнеру"} href={"/"} isActive={false} />
        </div>
        <a className="font-medium sm:flex hidden" href="#">
          +7 928 883 77 83
        </a>
        <div className="absolute sm:hidden flex right-[25px] top-[95px]">
          <div
            className={`sm:hidden ${
              active ? "flex" : "hidden"
            } flex-col gap-[20px] bg-dark p-4 rounded-[20px] items-center`}
          >
            <NavLink text={"Клиенту"} href={"/client"} isActive={true} />
            <NavLink text={"Партнеру"} href={"/"} isActive={false} />
            <a
              className={`font-medium sm:hidden ${active ? "flex" : "hidden"}`}
              href="#"
            >
              +7 928 883 77 83
            </a>
          </div>
        </div>
        <Image
          className="bg-opacity-[0.3] sm:hidden flex w-[30px] h-[30px]"
          src="/menu.svg"
          alt="menu image"
          width={30}
          height={30}
          onClick={() => setActive(!active)}
        />
      </div>
    </div>
  );
};

export default Navbar;
