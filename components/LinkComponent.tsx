import Link from "next/link";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "lucide-react";
import {ILink} from "@/lib/types";
import LinkForm from "@/components/LinkForm";
import {deleteLinkAction} from "@/lib/actions/link-actions";

export default function LinkComponent({linkId, title, url, collectionId, shared = false}: ILink) {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between sm:gap-4">
            <Link
                href={url}
                className="flex flex-col items-start md:items-center gap-3 hover:bg-muted/50 rounded-md p-2 transition-colors w-full md:flex-row"
                target="_blank"
            >
                <div className="flex gap-3">
                    <div className="text-lg font-medium">{title.length > 25 && !shared ? title.slice(0,25) + '...' : title}</div>
                </div>
                <div className="hidden md:display-block text-muted-foreground text-sm">{url.length > 50 && !shared ? url.slice(0, 25) + '...' : url}
                </div>
                <div className="md:hidden display-block text-muted-foreground text-sm">{url.length > 35 && !shared ? url.slice(0, 35) + '...' : url}
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