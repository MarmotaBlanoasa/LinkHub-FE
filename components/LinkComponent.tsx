import Link from "next/link";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "lucide-react";
import {ILink} from "@/lib/types";
import LinkForm from "@/components/LinkForm";
import {deleteLinkAction} from "@/lib/actions/link-actions";

export default function LinkComponent({linkId, title, url, collectionId, shared = false}: ILink) {
    return (
        <div className="flex items-center justify-between gap-4">
            <Link
                href={url}
                className="flex items-center gap-3 hover:bg-muted/50 rounded-md p-3 transition-colors w-full"
                target="_blank"
            >
                {/*<img src="/placeholder.svg" alt="Vercel" width={32} height={32} className="rounded-md"/>*/}
                <div className="flex items-center gap-3">
                    <div className="text-lg font-medium">{title}</div>
                </div>
                <div className="text-muted-foreground text-sm">{url.length > 50 ? url.slice(0, 50) + '...' : url}
                </div>
            </Link>
            {!shared && <div className="flex items-center gap-2">
                <LinkForm collectionId={collectionId} dialogTriggerType='editLink'
                          defaultValues={{linkName: title, linkUrl: url}} linkId={linkId}/>
                <form action={() => deleteLinkAction(linkId, collectionId)}>
                    <Button variant="ghost" size="icon" type='submit'>
                        <TrashIcon className="h-4 w-4"/>
                        <span className="sr-only">Delete</span>
                    </Button>
                </form>
            </div>}
        </div>
    )
}