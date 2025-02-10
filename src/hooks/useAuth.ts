"use client";

import { useEffect, useState } from "react";

export function useAuth() {
    const [user, setUser] = useState<null | { email: string }>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkSession() {
            const res = await fetch("/api/auth/me", { credentials: "include" });

            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
            setLoading(false);
        }

        checkSession();
    }, []);

    return { user, loading };
}