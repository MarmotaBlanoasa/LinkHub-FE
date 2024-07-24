import {useRouter} from "next/router";

export default function CollectionId(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <div>
            <h1>CollectionId {id}</h1>
        </div>
    )
}