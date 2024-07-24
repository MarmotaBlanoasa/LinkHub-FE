import Link from "next/link"
import Navigation from "@/components/Navigation";

export default function Home() {
    const routes = [
        {
            name: "Sign Up",
            href: "/sign-up",
        },
        {
            name: "Login",
            href: "/login",
        },
    ]
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navigation routes={routes} homeLink="/"/>
            <main className="flex-1">
                <section className="py-12 md:py-24 lg:py-32 overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl text-wrap font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Manage and Share Your Links with Ease
                                    </h1>
                                    <p className="max-w-[500px] text-wrap text-muted-foreground md:text-xl">
                                        LinkHub is a powerful link management platform that helps you organize, share,
                                        and collaborate on
                                        your important links.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/link.png"
                                width="550"
                                height="550"
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Organize and Share</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Centralize Your
                                Important Links</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                LinkHub helps you keep all your important links in one place, making it easy to access
                                and share them
                                with your team.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 LinkHub. All rights reserved.</p>
            </footer>
        </div>
    )
}

