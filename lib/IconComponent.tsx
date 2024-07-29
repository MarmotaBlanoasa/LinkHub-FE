import { FolderIcon, PlusIcon } from "lucide-react";


export function IconComponent({name, className, ...props}: {name: string, className?: string}) {
    switch (name) {
        case "folder":
            return <FolderIcon className={className} {...props}/>
        case "plus":
            return <PlusIcon className={className} {...props}/>
        default:
            return null;
    }
}