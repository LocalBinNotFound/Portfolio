"use client";
import React, { useState } from 'react';
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/app/components/MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Education",
        path: "#education",
    },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]
const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavLinkClick = (e, path) => {
        e.preventDefault(); // Prevent default anchor link behavior
        const section = document.querySelector(path);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed mx-auto border border-borderColor top-0 left-0 right-0 z-10 bg-navBarColor bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                <Image src="/images/logo.png" alt="my logo" width={50} height={50}/>
            </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    href={link.path}
                                    title={link.title}
                                    onClick={(e) => handleNavLinkClick(e, link.path)}/>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default NavBar;