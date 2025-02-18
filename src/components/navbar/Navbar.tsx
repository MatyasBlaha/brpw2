"use client";

import { useAuth } from "@/hooks/useAuth";
import { useParams } from "next/navigation";
import { Box, Button, Flex, Link, MenuContent, MenuItem, MenuRoot, MenuTrigger, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import { CgProfile } from "react-icons/cg";
import {useTranslations} from "next-intl";

export default function Navbar() {
    const { user, loading } = useAuth();
    const { locale } = useParams();
    const { toggleColorMode } = useColorMode();
    const t = useTranslations("navbar")

    console.log(loading); // Debugging

    return (
        <Box bg="bg.muted">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                p={8}
                bg={["primary.500", "primary.500", "transparent", "transparent"]}
                color="fg.highContrast"
            >
                <Box>
                    {loading ? (
                        <Skeleton height="40px" width="100px" />
                    ) : (
                        <Link href={`/${locale}`} fontSize="xl">
                            MyAPP
                        </Link>
                    )}
                </Box>

                <Switch onCheckedChange={() => toggleColorMode()} pr={4} />

                <div>
                    {loading ? (
                        <Flex gap={4}>
                            <Skeleton height="40px" width="100px" />
                            <Skeleton height="40px" width="40px" borderRadius="full" />
                        </Flex>
                    ) : user ? (
                        <Flex>
                            <Box>
                                <Link href={`/${locale}/app`} className="mr-4">
                                    <Button>můj účet</Button>
                                </Link>
                                <MenuRoot>
                                    <MenuTrigger asChild>
                                        <Button variant="ghost">
                                            <CgProfile />
                                        </Button>
                                    </MenuTrigger>
                                    <MenuContent position="absolute">
                                        <MenuItem value="profile">
                                            <Link href={`/${locale}/app/profile`}>
                                                {t("links.profile")}
                                            </Link>
                                        </MenuItem>
                                        <MenuItem value="settings">
                                            <Link href={`/${locale}/app/settings`}>
                                                {t("links.settings")}
                                            </Link>
                                        </MenuItem>
                                    </MenuContent>
                                </MenuRoot>
                            </Box>
                        </Flex>
                    ) : (
                        <Link href={`/${locale}/login`} className="mr-4">
                            Login
                        </Link>
                    )}
                </div>
            </Flex>
        </Box>
    );
}