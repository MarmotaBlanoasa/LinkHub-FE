import {Card, CardContent} from "@/components/ui/card";
import {FolderIcon} from "lucide-react";
import {IconComponent} from "@/lib/IconComponent";

interface CollectionFolderProps {
    name: string;
    linkCount: number;
    type: string;
}

export default function CollectionFolder({name, linkCount, type}: CollectionFolderProps) {
    return (
        <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <IconComponent name={type} className="h-8 w-8"/>
                <div className="text-lg font-medium">{name}</div>
                <div className="text-muted-foreground text-sm">{linkCount} links</div>
            </CardContent>
        </Card>
    )
}