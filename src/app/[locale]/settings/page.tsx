import React from 'react';
import {Heading} from "@chakra-ui/react";
import LanguageSwitch from "@/components/navbar/LanguageSwitch";
import {useTranslations} from "next-intl";

const Page = () => {
    const t = useTranslations("settings")

    return (
        <div>
          <Heading>
              {t("title")}
          </Heading>
            <LanguageSwitch/>
        </div>
    );
};

export default Page;