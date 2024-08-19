'use server';
import {getCollectionByToken} from "@/lib/controllers/collections";
import {getLinksByToken} from "@/lib/controllers/links";
import {Card, CardContent} from "@/components/ui/card";
import {ILink} from "@/lib/types";
import LinkComponent from "@/components/LinkComponent";

export default async function SharedCollectionID({params}: { params: { sharedId: string } }) {
    const sharedId = params.sharedId;
    const sharedCollectionData = await getCollectionByToken(sharedId);
    const sharedCollectionLinks = await getLinksByToken(sharedId);
    console.log(sharedCollectionData);
    return (
        <main className='flex-1'>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">{sharedCollectionData.collectionName}</h1>
                        <p className="text-muted-foreground">{sharedCollectionData.collectionDescription}</p>
                    </div>
                    <div className="grid gap-4">
                        <Card>
                            <CardContent className="p-6">
                                {sharedCollectionLinks?.map((link: ILink, index: number) => (
                                    <LinkComponent key={index} linkId={link.linkId} title={link.title}
                                                   url={link.url} collectionId={link.collectionId} shared/>))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}