"use clients"

import {useParams} from "next/navigation";

export function getOwnerId(){
    const params = useParams()
    const ownerId = params.ownerId;
    return ownerId
}