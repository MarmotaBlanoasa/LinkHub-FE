"use server";
import {getAllSharedCollections} from "@/lib/controllers/collections";
import {ICollection} from "@/lib/types";
import CollectionFolder from "@/components/CollectionFolder";

export default async function SharedCollections() {
    const sharedCollections = await getAllSharedCollections() as ICollection[] || [];
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                        <div className="grid gap-8 w-full">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Your Shared collections</h1>
                                <p className="text-muted-foreground">Here is the list of the collections shared by other
                                    users.</p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                                {sharedCollections.map((collection, index) =>
                                    <CollectionFolder key={index} name={collection.collectionName}
                                                      collectionId={collection.token}
                                                      linkCount={collection.linkCount}
                                                      type='folder'
                                                      shared
                                    />)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}