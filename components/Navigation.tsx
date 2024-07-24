"use client";
import Link from "next/link";
import {LinkIcon} from "lucide-react";
import {usePathname} from "next/navigation";

interface NavigationProps {
    routes: {
        name: string;
        href: string;
    }[];
    homeLink: string;
}

export default function Navigation({routes, homeLink}: NavigationProps) {
    const path = usePathname();
    console.log(path)
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href={homeLink} className="flex items-center justify-center" prefetch={false}>
                <LinkIcon className="h-6 w-6"/>
                <span className="sr-only">LinkHub</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                {routes.map((route) => (
                    <Link key={route.href} href={route.href}
                          className={`text-sm font-medium hover:underline underline-offset-4 ${route.href == path && "underline"}`} prefetch={false}>
                        {route.name}</Link>))
                }
            </nav>
        </header>
    )
}