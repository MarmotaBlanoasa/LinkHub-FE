"use client";
import Link from "next/link";
import {LinkIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {logoutUser} from "@/lib/controllers/auth";

interface NavigationProps {
    routes: {
        name: string;
        href: string;
    }[];
    homeLink: string;
    isAuthenticated?: boolean;
}

export default function Navigation({routes, homeLink, isAuthenticated}: NavigationProps) {
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
                          className={`text-sm pt-1 font-medium hover:underline underline-offset-4 ${route.href == path && "underline"}`}
                          prefetch={false}>
                        {route.name}</Link>))
                }
                {
                    isAuthenticated &&
                    <form action={logoutUser}>
                        <Button variant='link' size='sm'
                                className='h-auto px-0 text-sm font-medium hover:underline underline-offset-4'>
                            Logout
                        </Button>
                    </form>
                }
            </nav>
        </header>
    )
}