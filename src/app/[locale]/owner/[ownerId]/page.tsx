'use client'

import LoadOwnerData from "@/components/owner/LoadOwnerData";

export default function Page({params}: {params: {ownerId: string}}) {

    return (
        <LoadOwnerData ownerId={params.ownerId}/>
    );
}