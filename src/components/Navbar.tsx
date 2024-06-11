"use client";
import {
  bottomVariants,
  centerVariants,
  links,
  listItemVariants,
  listVariants,
  topVariants,
} from "@/utils/constants";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full items-center justify-between px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="flex items-center justify-center rounded-md bg-black p-1 text-sm font-semibold"
        >
          <span className="mr-1 text-white">Roma</span>
          <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-black">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden w-1/3 gap-4 md:flex">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="relative z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
