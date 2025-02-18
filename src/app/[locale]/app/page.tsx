"use client";

import {useLocale} from "@/context/LocaleContext";
import {useRouter} from "next/navigation";
import {Box, Button, Grid, Heading, Link} from "@chakra-ui/react";
import BackButton from "@/components/ui/BackButton";
import React from "react";

export default function Page() {
    const locale = useLocale(); // Get locale globally
    const router = useRouter();

    return (
        <div>
            <div>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap="6"
                    margin="auto"
                    maxWidth="1200px"
                >
                    <Box>
                        <Heading>Heading 1</Heading>
                    </Box>
                    <Box>
                        <Heading>Heading 2</Heading>
                    </Box>
                    <Box>
                        <Heading>Heading 3</Heading>
                    </Box>
                    <Box>
                        <Link href={`/${locale}/app/newOwner`}>Create new owner</Link>
                    </Box>
                </Grid>
            </div>
        </div>
    );
}