"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

interface TransitionProviderProps {
  children: React.ReactNode;
}

const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <main
        className="h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100"
        key={pathName}
      >
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-black"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default text-8xl text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="fixed bottom-0 z-30 h-screen w-screen rounded-t-[100px] bg-black"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <nav className="h-24">
          <Navbar />
        </nav>
        <section className="h-[calc(100vh - 6rem)]">{children}</section>
      </main>
    </AnimatePresence>
  );
};

export default TransitionProvider;
