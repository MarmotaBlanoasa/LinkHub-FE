"use server"

import {createLink, deleteLink, updateLink} from "@/lib/controllers/links";
import {revalidatePath} from "next/cache";

export async function manageLinkCreateUpdate(e: FormData, collectionId: number, linkId?: number, defaultValues?: {
    linkName: string,
    linkUrl: string
}) {
    !!defaultValues ? await updateLink(linkId || 0, e) : await createLink(e, collectionId)
    revalidatePath(`/collections/${collectionId}`)
}
export async function deleteLinkAction(collectionId:number, linkId:number) {
    await deleteLink(linkId)
    revalidatePath(`/collections/${collectionId}`)
}