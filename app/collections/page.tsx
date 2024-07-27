"use server";
import {Card, CardContent} from "@/components/ui/card";
import {FolderIcon, PlusIcon} from "lucide-react";
import {getUser} from "@/lib/controllers/auth";

export default async function Collections() {
    const user = await getUser() as {userName: string, email: string};
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                        <div className="grid gap-8 w-full">
                            <div className="space-y-2 text-center">
                                <h2 className='text-2xl'>Hi, {user?.userName}</h2>
                                <h1 className="text-3xl font-bold">Your Collections</h1>
                                <p className="text-muted-foreground">Manage and organize your links in collections.</p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                                        <PlusIcon className="h-8 w-8"/>
                                        <div className="text-lg font-medium">Create New Collection</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                                        <FolderIcon className="h-8 w-8"/>
                                        <div className="text-lg font-medium">Work Links</div>
                                        <div className="text-muted-foreground text-sm">12 links</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                                        <FolderIcon className="h-8 w-8"/>
                                        <div className="text-lg font-medium">Hobby Projects</div>
                                        <div className="text-muted-foreground text-sm">8 links</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                                        <FolderIcon className="h-8 w-8"/>
                                        <div className="text-lg font-medium">Bookmarks</div>
                                        <div className="text-muted-foreground text-sm">24 links</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                                        <FolderIcon className="h-8 w-8"/>
                                        <div className="text-lg font-medium">Travel</div>
                                        <div className="text-muted-foreground text-sm">6 links</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                                        <FolderIcon className="h-8 w-8"/>
                                        <div className="text-lg font-medium">Recipes</div>
                                        <div className="text-muted-foreground text-sm">18 links</div>
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