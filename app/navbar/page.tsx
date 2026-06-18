"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "/" },
  { name: "Skills", href: "skill" },
  { name: "Projects", href: "project" },
  { name: "Experience", href: "experience" },
  { name: "Education", href: "education" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
      fixed top-0 left-0 z-50 w-full
      bg-zinc-950/60
      backdrop-blur-xl
      border-b border-white/10
      shadow-[0_8px_30px_rgb(0,0,0,0.12)]
    "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="group">
          <h1
            className="
            text-3xl
            font-black
            tracking-tight
            bg-linear-to-r
            from-yellow-300
            via-yellow-500
            to-orange-500
            bg-clip-text
            text-transparent
            transition-all
            duration-300
            group-hover:scale-105
            drop-shadow-[0_0_12px_rgba(234,179,8,0.35)]
          "
          >
            ANUJ<span className="text-white">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
              relative
              text-zinc-400
              font-medium
              transition-all
              duration-300
              hover:text-yellow-400

              after:absolute
              after:left-0
              after:-bottom-1
              after:h-0.5
              after:w-0
              after:bg-yellow-400
              after:transition-all
              after:duration-300

              hover:after:w-full
            "
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
       <Link
  href="https://www.mindrisers.com.np/certificate/validate/MR-82031-MS"
  target="_blank"
  className="px-4 py-2 rounded-lg border border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition"
>
  Certificate
</Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                text-zinc-300
                font-medium
                transition
                hover:text-yellow-400
              "
              >
                {item.name}
              </a>
            ))}

           {/* <Link
  href="/certificate.png"
  onClick={() => setIsOpen(false)}
  className="rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 px-4 py-3 text-center font-semibold text-black"
>
  Certificate
</Link> */}
          </div>
        </div>
      )}
    </header>
  );
}