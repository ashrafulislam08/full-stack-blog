import { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" alt="Ashraful Logo" w={32} h={32} />
        <span>AshrafulBlog.</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE MENU BUTTON */}
        <div className="text-4xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? "x" : "Ξ"}
        </div>
        {/* MOBILE MENU LIST */}
        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg justify-center items-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
