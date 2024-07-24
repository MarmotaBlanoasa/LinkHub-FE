import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ShareIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

export default function CollectionId({params} : {params: {collectionId: string}}){
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                        <div className="grid gap-8 w-full">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Work Links</h1>
                                <p className="text-muted-foreground">Your collection of work-related links.</p>
                                <div className="flex items-center justify-center gap-4">
                                    <Input type="search" placeholder="Search links..." className="w-full max-w-md"/>
                                    <Button variant="outline">
                                        <ShareIcon className="h-4 w-4 mr-2"/>
                                        Share
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid gap-2">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between gap-4 hover:bg-muted/50 rounded-md p-3 transition-colors"
                                                prefetch={false}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="text-lg font-medium">Vercel</div>
                                                </div>
                                                <div className="text-muted-foreground text-sm">https://vercel.com</div>
                                            </Link>
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between gap-4 hover:bg-muted/50 rounded-md p-3 transition-colors"
                                                prefetch={false}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="text-lg font-medium">Tailwind CSS</div>
                                                </div>
                                                <div className="text-muted-foreground text-sm">https://tailwindcss.com
                                                </div>
                                            </Link>
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between gap-4 hover:bg-muted/50 rounded-md p-3 transition-colors"
                                                prefetch={false}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="text-lg font-medium">Shadcn UI</div>
                                                </div>
                                                <div className="text-muted-foreground text-sm">https://ui.shadcn.com
                                                </div>
                                            </Link>
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between gap-4 hover:bg-muted/50 rounded-md p-3 transition-colors"
                                                prefetch={false}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="bg-muted rounded-md w-8 h-8 flex items-center justify-center text-muted-foreground font-bold">
                                                        R
                                                    </div>
                                                    <div className="text-lg font-medium">React</div>
                                                </div>
                                                <div className="text-muted-foreground text-sm">https://reactjs.org</div>
                                            </Link>
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between gap-4 hover:bg-muted/50 rounded-md p-3 transition-colors"
                                                prefetch={false}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="bg-muted rounded-md w-8 h-8 flex items-center justify-center text-muted-foreground font-bold">
                                                        N
                                                    </div>
                                                    <div className="text-lg font-medium">Next.js</div>
                                                </div>
                                                <div className="text-muted-foreground text-sm">https://nextjs.org</div>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}