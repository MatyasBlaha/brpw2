import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Provider } from "@/components/ui/provider";
import { LocaleProvider } from "@/context/LocaleContext";
import Navbar from "@/components/navbar/Navbar";

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = await params
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body>
        <NextIntlClientProvider messages={messages}>
            <Provider>
                <LocaleProvider>
                    <Navbar />
                    {children}
                </LocaleProvider>
            </Provider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}