"use server";
import {getUser} from "@/lib/controllers/auth";
import CollectionFolder from "@/components/CollectionFolder";
import CreateCollection from "@/components/CreateCollection";
import {getCollections} from "@/lib/controllers/collections";
import {ICollection} from "@/lib/types";

export default async function Collections() {
    const user = await getUser() as { userName: string, email: string };
    const collections = await getCollections() as { collections: ICollection[] } || []
    console.log(collections)
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
                                <CreateCollection/>
                                {collections?.collections?.map((collection: ICollection, index: number) => (
                                    <CollectionFolder key={index} name={collection.collectionName}
                                                      collectionId={collection.collectionId}
                                                      linkCount={collection.linkCount}
                                                      type='folder'/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}