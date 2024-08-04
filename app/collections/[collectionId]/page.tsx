'use server';
import {getCollection} from "@/lib/controllers/collections";
import {ICollection, ILink} from "@/lib/types";
import {getLinksByCollection} from "@/lib/controllers/links";
import CollectionPage from "@/components/CollectionPage";

export default async function CollectionId({params}: { params: { collectionId: string } }) {
    const collectionDetails = await getCollection(parseInt(params.collectionId)) as ICollection;
    const links = await getLinksByCollection(parseInt(params.collectionId)) as ILink[];
    console.log(links);
    return (
        <>
            <CollectionPage params={params} collectionDetails={collectionDetails} links={links}/>
        </>
    )
}