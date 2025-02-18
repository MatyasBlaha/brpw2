"use client";

import { useAuth } from "@/hooks/useAuth";
import {useParams, useRouter} from "next/navigation";
import { useEffect } from "react";
import {Box} from "@chakra-ui/react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const {locale} = useParams()


    useEffect(() => {
        if (!loading && !user) {
            router.push(`/${locale}/login`);
        }
    }, [user, loading, router]);

    if (loading) return <p>Loading...</p>;

    return (
        <Box maxWidth="80%" margin="auto">
            {children}
        </Box>
    );
}