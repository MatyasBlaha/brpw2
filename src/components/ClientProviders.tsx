"use client";

import { Provider } from "@/components/ui/provider";
import { LocaleProvider } from "@/context/LocaleContext";
import Navbar from "@/components/navbar/Navbar";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider>
            <LocaleProvider>
                <Navbar />
                {children}
            </LocaleProvider>
        </Provider>
    );
}