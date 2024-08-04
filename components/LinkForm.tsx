import {Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import DialogTriggerContent from "@/components/DialogTriggerContent";
import {manageLinkCreateUpdate} from "@/lib/actions/link-actions";

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
                <form action={(e) => manageLinkCreateUpdate(e, collectionId, linkId, defaultValues)}
                      className="space-y-4">
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