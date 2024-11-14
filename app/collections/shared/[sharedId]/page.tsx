'use server';
import {getCollectionByToken} from "@/lib/controllers/collections";
import {getLinksByToken} from "@/lib/controllers/links";
import CollectionPage from "@/components/CollectionPage";
import {headers} from "next/headers";

export default async function SharedCollectionID({params}: { params: { sharedId: string } }) {
    const sharedId = params.sharedId;
    const sharedCollectionData = await getCollectionByToken(sharedId);
    const sharedCollectionLinks = await getLinksByToken(sharedId);
    const headersList = headers();
    const hostname = headersList.get('x-forwarded-host') || 'localhost:3000';
    return (
        <>
            <CollectionPage collectionDetails={sharedCollectionData} links={sharedCollectionLinks} hostname={hostname}/>
        </>
    )
}