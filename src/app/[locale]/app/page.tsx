"use client";

import { useLocale } from "@/context/LocaleContext";
import { useRouter } from "next/navigation";
import {Button, Link} from "@chakra-ui/react";

export default function Page() {
    const locale = useLocale(); // Get locale globally
    const router = useRouter();

    return (
        <div>
            <h1>APP PAGE</h1>
            <p>Welcome to the protected app page!</p>
            <Link href={`/${locale}/app/newOwner`}>Create new owner</Link>
        </div>
    );
}