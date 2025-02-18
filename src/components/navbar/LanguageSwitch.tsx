'use client'
import React from 'react';
import {Button, MenuContent, MenuRoot, MenuTrigger, MenuItem} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

function LanguageSwitch(props) {
    const router = useRouter()
    const t = useTranslations("homePage.language")

    return (
        <div>
            <MenuRoot>
                <MenuTrigger>
                    <Button>
                        Language
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="en" onClick={() => router.push(`/cz/app/settings`)}>
                        {t('czech')}
                    </MenuItem>
                    <MenuItem value="cz" onClick={() => router.push(`/en/app/settings`)}>
                        {t('english')}
                    </MenuItem>
                </MenuContent>
            </MenuRoot>
        </div>
    );
}

export default LanguageSwitch;