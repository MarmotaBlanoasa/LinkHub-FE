"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ShareIcon} from "lucide-react";

export default function ShareDialog({shareLink}: { shareLink: string }) {
    return (
        <>
            <Dialog>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Share Collection</DialogTitle>
                        <DialogDescription>
                            Share your collection with others.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="collection-name">Collection Name</Label>
                            <Input id="collection-name" type="text" name='share-link'
                                   placeholder="shareLink" value={shareLink}
                                   required readOnly/>
                        </div>
                        <DialogClose>
                            <Button type="button">
                                Save Link
                            </Button>
                        </DialogClose>
                    </div>

                </DialogContent>
                <DialogTrigger>
                    <div className='flex items-center px-4 py-2 h-10 hover:bg-muted/50 transition-colors text-center border rounded-md'>
                        <ShareIcon className="h-4 w-4 mr-2"/>
                        Share
                    </div>
                </DialogTrigger>
            </Dialog>
        </>
    )
}