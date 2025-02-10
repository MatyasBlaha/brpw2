'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function LoginPage({ params: { locale } }: { params: { locale: string } }) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.cookie = `token=${(await res.json()).token}; path=/`;
            router.push(`/${locale}/app`);
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}