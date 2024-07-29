import {Card, CardContent} from "@/components/ui/card";
import {PlusIcon} from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import createCollection from "@/lib/controllers/collections";
import {revalidatePath} from "next/cache";

export default function CreateCollection() {
    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Collection</DialogTitle>
                    <DialogDescription>
                        Create a new collection to organize your links.
                    </DialogDescription>
                </DialogHeader>
                <form action={async (e) => {
                    'use server'
                    await createCollection(e)
                    revalidatePath('/collections')
                }} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="collection-name">Collection Name</Label>
                        <Input id="collection-name" type="text" name='collection-name' placeholder="Collection Title"
                               required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="collection-description">Description</Label>
                        <Input id="collection-description" type="text" name='collection-description'
                               placeholder="Collection Description" required/>
                    </div>
                    <DialogClose>
                        <Button type="submit">
                            Create Collection
                        </Button>
                    </DialogClose>
                </form>

            </DialogContent>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors text-center">
                <DialogTrigger>
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                        <PlusIcon className="h-8 w-8"/>
                        <div className="text-lg font-medium">Create New Collection</div>
                    </CardContent>
                </DialogTrigger>
            </Card>
        </Dialog>
    )
}