'use server';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ShareIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {getCollection} from "@/lib/controllers/collections";
import {ICollection, ILink} from "@/lib/types";
import LinkForm from "@/components/LinkForm";
import LinkComponent from "@/components/LinkComponent";
import {getLinksByCollection} from "@/lib/controllers/links";

export default async function CollectionId({params}: { params: { collectionId: string } }) {
    const collectionDetails = await getCollection(parseInt(params.collectionId)) as ICollection;
    const links = await getLinksByCollection(parseInt(params.collectionId)) as ILink[];
    console.log(links);
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                        <div className="grid gap-8 w-full">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">{collectionDetails.collectionName}</h1>
                                <p className="text-muted-foreground">{collectionDetails.collectionDescription}</p>
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
                                        {links.map((link:ILink, index:number) => (
                                                <LinkComponent key={index} linkId={link.linkId} title={link.title}
                                                               url={link.url} collectionId={link.collectionId}/>))}
                                        <LinkForm collectionId={parseInt(params.collectionId)} dialogTriggerType='addLink'/>
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