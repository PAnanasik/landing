"use client";
import Image from "next/image";

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
        <div className="flex gap-[20px]">
          <NavLink text={"Клиенту"} href={"/client"} isActive={false} />
          <NavLink text={"Партнеру"} href={"/"} isActive={true} />
        </div>
        <div>
          <p className="font-medium">+7 928 883 77 83</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
