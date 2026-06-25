import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center select-none cursor-pointer font-bold text-xl md:text-2xl">
        <span
          className="text-primary capitalize"
          style={{
            fontFamily: "'Satisfy', cursive",
            fontWeight: "700",
          }}
        >
          Abderrahman
        </span>
        <span
          className="text-black dark:text-white capitalize ml-1.5"
          style={{
            fontFamily: "'Satisfy', cursive",
            fontWeight: "700",
          }}
        >
          Settaoui
        </span>
      </a>
    </Link>
  );
};

export default Logo;
