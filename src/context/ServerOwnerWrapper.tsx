'use client'

import {useParams} from "next/navigation";
import {createContext, useContext} from "react";

const OwnerContext = createContext<string | null>(null);

export function ServerOwnerWrapper({
                                               children
                                           }: {
    children: React.ReactNode;
}) {
    const { ownerId } = useParams();

    return (
        <div>
            <OwnerContext value={ownerId}>
                {children}
            </OwnerContext>
        </div>
    );
}

export function useLocale() {
    return useContext(OwnerContext) as string;
}