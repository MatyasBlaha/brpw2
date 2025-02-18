'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
};

export default function AuthForm({ params: { locale } }: { params: { locale: string } }) {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>();

    const toggleAuthMode = () => setIsLogin(!isLogin);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const endpoint = isLogin ? 'login' : 'register';

        try {
            const res = await fetch(`/api/auth/${endpoint}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                const { token } = await res.json();
                document.cookie = `token=${token}; path=/`;
                router.push(`/${locale}/app`);
            }
        } catch (error) {
            console.error('Authentication failed:', error);
        }
    };

    return (
        <div className="auth-container">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                    />
                </div>
                <div className="form-group">
                    <input
                        {...register('password', { required: true })}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                >
                    {isLogin ? (isSubmitting ? 'Logging in...' : 'Login') : (isSubmitting ? 'Registering...' : 'Register')}
                </button>
            </form>
            <div className="auth-toggle">
                {isLogin ? (
                    <>
                        Don't have an account?{' '}
                        <button type="button" onClick={toggleAuthMode}>
                            Register
                        </button>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <button type="button" onClick={toggleAuthMode}>
                            Login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}