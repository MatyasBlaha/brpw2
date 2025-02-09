'use client'

import {useTranslations} from "next-intl";
import { useColorMode } from "@/components/ui/color-mode";
import {Box, Button, Text} from "@chakra-ui/react";

export default function Page() {
    const t = useTranslations("HomePage")
    const { toggleColorMode } = useColorMode();

    return (
        <Box display="flex">
            <Text className='conteiner' color="fg.muted">{t("title")}</Text>
            <Button bgColor="primary" onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Box>
    );
}