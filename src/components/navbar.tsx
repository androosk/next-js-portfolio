"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { classNames } from "@/functions/classNames";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "underline underline-offset-4 text-yellow-400" : "";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      <header className=" md:py-11 px-28 md:flex gap-8 items-center md:justify-between border-b-2 border-orange-600 outline-1 outline-gray-900 text-gray-50 bg-black">
        <div className="flex justify-between items-center py-4 md:py-0">
          <Link href="/">
            <h1 className="tracking-widest lowercase text-lg">Andrew Tirpok</h1>
          </Link>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-8 lg:gap-12 flex-1 justify-end items-center`}
        >
          <nav className="flex flex-col md:flex-row justify-center items-center text-center text-lg tracking-wider gap-10 2xl:gap-12">
            <Link
              href="/tour"
              className={`${isActive(
                "/tour"
              )} transition-colors hover:text-yellow-400 py-2 md:py-0`}
            >
              Projects
            </Link>
            <Link
              href="/garage-specs"
              className={`${isActive(
                "/garage-specs"
              )} transition-colors hover:text-yellow-400 py-2 md:py-0`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${isActive(
                "/contact"
              )} transition-colors hover:text-yellow-400 py-2 md:py-0`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
