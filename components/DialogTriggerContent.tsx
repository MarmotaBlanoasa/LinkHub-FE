import EditLinkTrigger from "@/components/DialogTriggers/EditLinkTrigger";
import AddLinkTrigger from "@/components/DialogTriggers/AddLinkTrigger";

export default function DialogTriggerContent({type}: { type: string }) {
    switch (type) {
        case 'editLink':
            return <EditLinkTrigger/>
        case "addLink":
            return <AddLinkTrigger/>
        default:
            return null
    }
}