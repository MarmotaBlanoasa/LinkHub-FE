import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function CollectionsLayout({children}: { children: React.ReactNode }) {
    const routes = [{
        name: "My Collections",
        href: "/collections"
    }, {
        name: "Shared Collections",
        href: "/collections/shared"
    }]
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navigation routes={routes} homeLink="/collections" isAuthenticated/>
            {children}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 LinkHub. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}