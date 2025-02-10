'use client'

import {useTranslations} from "next-intl";
import { useColorMode } from "@/components/ui/color-mode";
import {Box, Button, Heading, Text} from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";

export default function Page() {
    const t = useTranslations("HomePage")
    const { toggleColorMode } = useColorMode();

    return (
        <Box display="flex">
            <div className="flex flex-col">
                <div>
                    <Text className='conteiner' color="fg.muted">{t("title")}</Text>
                    <Button bgColor="primary" onClick={toggleColorMode}>Toggle Color Mode</Button>
                    <Heading size="5xl">Welcome</Heading>
                </div>
            </div>
        </Box>
    );
}