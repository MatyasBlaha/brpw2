'use client'

import {useTranslations} from "next-intl";
import {Box, Heading, Text} from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";

export default function Page() {
    const t = useTranslations("homePage")

    return (
        <Box display="flex" minWidth="100vh" bg="bg.muted">
            <div className="flex flex-col">
                <div>
                    <Text className='conteiner' color="fg.muted">{t("title")}</Text>
                    <Heading size="5xl">Welcome</Heading>
                </div>
            </div>
        </Box>
    );
}