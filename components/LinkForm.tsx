import {Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {revalidatePath} from "next/cache";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {createLink, updateLink} from "@/lib/controllers/links";
import DialogTriggerContent from "@/components/DialogTriggerContent";

export default function LinkForm({linkId, collectionId, dialogTriggerType, defaultValues}: {
    collectionId: number,
    linkId?: number,
    dialogTriggerType: string,
    defaultValues?: { linkName: string, linkUrl: string }
}) {

    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{!!defaultValues ? 'Edit Link' : 'Create New Link To Store'}</DialogTitle>
                    <DialogDescription>
                        {!!defaultValues ? 'You can edit the information about the link' : 'Create a new link to store in your collection.'}
                    </DialogDescription>
                </DialogHeader>
                <form action={async (e) => {
                    'use server'
                    !!defaultValues ? await updateLink(linkId || 0, e): await createLink(e, collectionId)
                    revalidatePath(`/collections/${collectionId}`)
                }} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="link-name">Link Name</Label>
                        <Input id="link-name" type="text" name='link-name' placeholder="Link Name"
                               defaultValue={defaultValues?.linkName}
                               required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="link-url">Link Url</Label>
                        <Input id="link-url" type="text" name='link-url' defaultValue={defaultValues?.linkUrl}
                               placeholder="Link Url" required/>
                    </div>
                    <DialogClose>
                        <Button type="submit">
                            Create Link
                        </Button>
                    </DialogClose>
                </form>

            </DialogContent>
            <DialogTriggerContent type={dialogTriggerType}/>
        </Dialog>
    )
}