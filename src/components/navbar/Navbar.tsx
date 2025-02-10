"use client";

import { useAuth } from "@/hooks/useAuth";
import {useParams, useRouter} from "next/navigation";
import {Link} from "@chakra-ui/react";

export default function Navbar() {
    const { user } = useAuth();
    const router = useRouter();
    const {locale} = useParams()

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push(`/${locale}/login`);
    };

    return (
        <nav className="p-4 bg-gray-800 text-white">
            <div className="flex justify-between">
                <span>MyApp</span>
                <div>
                    {user ? (
                        <>
                            <span className="mr-4">{user.email}</span>
                            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href={`/${locale}/login`} className="mr-4">Login</Link>
                            <Link href={`/${locale}/register`} className="mr-4">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}