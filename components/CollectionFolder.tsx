import {Card, CardContent} from "@/components/ui/card";
import {IconComponent} from "@/lib/IconComponent";
import Link from "next/link";

interface CollectionFolderProps {
    collectionId: number | string;
    name: string;
    linkCount: number;
    type: string;
    shared?: boolean;
}

export default function CollectionFolder({collectionId, name, linkCount, type, shared = false}: CollectionFolderProps) {
    const link = shared ? `/collections/shared/${collectionId}` : `/collections/${collectionId}`;
    return (
        <Link href={link}>
            <Card className='cursor-pointer hover:bg-muted/50 transition-colors'>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                    <IconComponent name={type} className="h-8 w-8"/>
                    <div className="text-lg font-medium">{name}</div>
                    <div className="text-muted-foreground text-sm">{linkCount} links</div>
                </CardContent>
            </Card>
        </Link>
    )
}