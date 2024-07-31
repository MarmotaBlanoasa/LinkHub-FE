import {Button} from "@/components/ui/button";
import {FilePenIcon} from "lucide-react";
import {DialogTrigger} from "@/components/ui/dialog";

export default function EditLinkTrigger() {
    return (
        <>
            <DialogTrigger>
                <div className='flex items-center px-4 py-2 h-10 hover:bg-muted/50 transition-colors text-center'>
                    <FilePenIcon className="h-4 w-4"/>
                    <span className="sr-only">Edit</span>
                </div>
            </DialogTrigger>
        </>
    )
}