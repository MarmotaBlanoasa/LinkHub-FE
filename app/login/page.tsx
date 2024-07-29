"use client";
import Link from "next/link"
import {LinkIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {loginUser} from "@/lib/controllers/auth";
import {useState} from "react";

export default function Login() {
    const [error, setError] = useState<string>();
    const handleSubmit = async (e: FormData) => {
        const response = await loginUser(e);
        setError(response);
    }
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="/" className="flex items-center justify-center" prefetch={false}>
                    <LinkIcon className="h-6 w-6"/>
                    <span className="sr-only">LinkHub</span>
                </Link>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                        <div className="mx-auto w-full max-w-md space-y-6">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Login to LinkHub</h1>
                                <p className="text-muted-foreground">Enter your email and password to access your
                                    account.</p>
                            </div>
                            <form action={async (e)=> await handleSubmit(e)} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" name='email' placeholder="m@example.com" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" name='password' required placeholder='Password'/>
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </form>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/sign-up" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 LinkHub. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}