"use client";

import { Provider } from "@/components/ui/provider";
import { LocaleProvider } from "@/context/LocaleContext";
import Navbar from "@/components/navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <Provider>
            <LocaleProvider>
                <QueryClientProvider client={queryClient}>
                        <Navbar />
                        {children}
                </QueryClientProvider>
            </LocaleProvider>
        </Provider>
    );
}