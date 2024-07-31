import {Card, CardContent} from "@/components/ui/card";
import {DialogTrigger} from "@/components/ui/dialog";
import {PlusIcon} from "lucide-react";

export default function AddLinkTrigger(){
    return (
        <>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors text-center">
                <DialogTrigger>
                    <CardContent className='flex items-center justify-between gap-4 px-4 py-2'>
                        <PlusIcon className="h-4 w-4 mr-2"/>
                        Add Link
                    </CardContent>
                </DialogTrigger>
            </Card>
        </>
    )
}