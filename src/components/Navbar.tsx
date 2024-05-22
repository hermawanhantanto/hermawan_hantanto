"use client";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const handleClick = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setActive(false);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [active]);

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all max-xl:px-8">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-sm">
            Hermawan{" "}
            <span className="font-semibold text-green-600">Hantanto</span>
          </Link>
        </div>
        <ul className="items-center gap-6 text-sm sm:flex hidden">
          <li className="relative group">
            <a href="#about" className="group-hover:text-green-500">
              About
            </a>
            <div className="absolute inset-x-0 w-full h-1 bg-green-500 -bottom-2 rounded-xl transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
          </li>
          <li className="relative group">
            <a href="#projects" className="group-hover:text-green-500">
              Projects
            </a>
            <div className="absolute inset-x-0 w-full h-1 bg-green-500 -bottom-2 rounded-xl transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
          </li>
          <li className="relative group">
            <div className="w-[1px] h-full bg-gray-300 absolute -left-3" />
            <a
              href="#contact"
              className={buttonVariants({
                size: "sm",
                className: "ml-1.5 flex items-center gap-1.5",
              })}
            >
              Contact
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </li>
        </ul>

        <Menu
          className="w-5 h-5 cursor-pointer sm:hidden block"
          onClick={() => setActive(!active)}
        />
        {active && (
          <div
            className="absolute top-12 rounded shadow-sm max-w-[200px] flex flex-col p-5 right-4 bg-white border border-gray-200 gap-3 transition-all duration-200 ease-in-out"
            ref={containerRef}
          >
            <a href="#about" className="text-sm">
              About
            </a>
            <a href="#projects" className="text-sm">
              Projects
            </a>

            <a
              href="#contact"
              className={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1.5",
              })}
            >
              Contact
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
