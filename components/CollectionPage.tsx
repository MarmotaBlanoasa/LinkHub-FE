'use client'
import {Input} from "@/components/ui/input";
import ShareDialog from "@/components/ShareDialog";
import {Card, CardContent} from "@/components/ui/card";
import {ICollection, ILink} from "@/lib/types";
import LinkComponent from "@/components/LinkComponent";
import LinkForm from "@/components/LinkForm";
import {useState} from "react";

export default function CollectionPage({params, collectionDetails, links, hostname}: {
    params: { collectionId: string },
    collectionDetails: ICollection,
    links: ILink[]
    hostname: string
}) {
    const [search, setSearch] = useState('')
    const filteredLinks = links?.filter((link: ILink) => link.title.toLowerCase().includes(search.toLowerCase()))
    const shareLink = `${hostname}/collections/shared/${collectionDetails.token}`
    return (
        <main className="flex-1">
            <section className="w-full p-12 md:py-24 lg:py-32">
                <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                    <div className="grid gap-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">{collectionDetails.collectionName}</h1>
                            <p className="text-muted-foreground">{collectionDetails.collectionDescription}</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Input type="search" placeholder="Search links..." value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <ShareDialog shareLink={shareLink}/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <Card>
                                <CardContent className="p-6">
                                    {filteredLinks.map((link: ILink, index: number) => (
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
    )
}