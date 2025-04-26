"use client";

import { use } from "react";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function OwnerLayout({ children, params }: { children: React.ReactNode, params: Promise<{ ownerId: string; locale: string }> }) {
    const pathname = usePathname();
    const { ownerId, locale } = use(params);

    const links = [
        { name: "Settings", href: `/${locale}/owner/${ownerId}/settings` },
        { name: "Menu", href: `/${locale}/owner/${ownerId}/menu` },
    ];

    // Build breadcrumbs
    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbLinks = pathSegments
        .filter((segment, index) => index !== 0)
        .map((segment, index, arr) => {
            let name = decodeURIComponent(segment);

            if (index === 1) {
                name = "Owner Detail";
            } else if (name === "owner") {
                name = "Owner";
            } else if (name === "settings") {
                name = "Settings";
            } else if (name === "menu") {
                name = "Menu";
            }

            const href = "/" + [locale, ...arr.slice(0, index + 1)].join("/");

            return { href, name };
        });

    return (
        <Flex direction="column" minH="100vh">
            {/* Top menu */}
            <Box bg="gray.100" px={6} py={4}>
                <Flex gap={6}>
                    {links.map((link) => (
                        <ChakraLink
                            key={link.name}
                            as={Link}
                            href={link.href}
                            fontWeight={pathname.startsWith(link.href) ? "bold" : "normal"}
                            borderBottom={pathname.startsWith(link.href) ? "2px solid black" : "none"}
                            _hover={{ textDecoration: "none", borderBottom: "2px solid black" }}
                        >
                            {link.name}
                        </ChakraLink>
                    ))}
                </Flex>
            </Box>

            {/* Breadcrumbs */}
            <Box bg="gray.50" px={6} py={2}>
                <Flex gap={2}>
                    {breadcrumbLinks.map((crumb, index) => (
                        <React.Fragment key={crumb.href}>
                            {index > 0 && <Box>/</Box>}
                            <ChakraLink as={Link} href={crumb.href}>
                                {crumb.name}
                            </ChakraLink>
                        </React.Fragment>
                    ))}
                </Flex>
            </Box>

            {/* Page Content */}
            <Box flex="1" p={6}>
                {children}
            </Box>
        </Flex>
    );
}