'use client'
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

// Assuming Menu and MenuItem are custom components in "./ui/navbar-menu"
import { MenuItem } from "./ui/navbar-menu";
import { Menu } from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
    const [navs, setNavs] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const menus = await fetch('http://localhost/wordpress/wp-json/wp/v2/primary-menu');
                var navs = await menus.json();
                setNavs(navs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                {navs.map((nav) => (
                    <Link href={`/${nav.slug}`} key={nav.name}>
                        <MenuItem setActive={setActive} active={active} item={nav.name}></MenuItem>
                    </Link>
                ))}
            </Menu>
        </div>
    )
}

export default Navbar;