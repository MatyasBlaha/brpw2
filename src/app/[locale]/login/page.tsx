'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useMutation} from "@tanstack/react-query";
import {apiRequest} from "@/lib/api/apiClient";
import {Login} from "@/types/auth/login";

export default function AuthForm({params: {locale}}: { params: { locale: string } }) {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const {register, handleSubmit, formState: {isSubmitting}} = useForm<Login>();

    const toggleAuthMode = () => setIsLogin(!isLogin);
    const endpoint = isLogin ? 'login' : 'register';

    const mutation = useMutation({
        mutationFn: (data: Login) => apiRequest(`/api/auth/${endpoint}`, "POST", data),
        onSuccess: ({token}) => {
            document.cookie = `token=${token}; path=/`;
            router.push(`/${locale}/owner`);
        },
        onError: (error) => {
            console.error(error);
        },
    })

    const onSubmit: SubmitHandler<Login> = (data) => {
        mutation.mutate(data);
    }

    return (
        <div className="auth-container">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        {...register('email', {required: true})}
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                    />
                </div>
                <div className="form-group">
                    <input
                        {...register('password', {required: true})}
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

                {mutation.isPending && <p>Processing...</p>}
                {mutation.isError && <p className="error-message">{mutation.error.message}</p>}
                {mutation.isSuccess && <p className="success-message">Success! Redirecting...</p>}

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