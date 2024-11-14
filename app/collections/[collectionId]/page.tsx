'use server';
import {getCollection} from "@/lib/controllers/collections";
import {ICollection, ILink} from "@/lib/types";
import {getLinksByCollection} from "@/lib/controllers/links";
import CollectionPage from "@/components/CollectionPage";
import {headers} from "next/headers";

export default async function CollectionId({params}: { params: { collectionId: string } }) {
    const collectionDetails = await getCollection(parseInt(params.collectionId)) as ICollection;
    const links = await getLinksByCollection(parseInt(params.collectionId)) as ILink[];
    const headersList = headers();
    const hostname = headersList.get('x-forwarded-host') || 'localhost:3000';
    return (
        <>
            <CollectionPage collectionDetails={collectionDetails} links={links} hostname={hostname}/>
        </>
    )
}