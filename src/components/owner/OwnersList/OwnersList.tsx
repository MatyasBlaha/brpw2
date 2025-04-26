"use client";

import {useLocale} from "@/context/LocaleContext";
import {useRouter} from "next/navigation";
import {Box, Button, Grid, Heading, Link} from "@chakra-ui/react";
import BackButton from "@/components/ui/BackButton";
import React, {useEffect, useState} from "react";
import {apiRequest} from "@/lib/api/apiClient";
import {useAuth} from "@/hooks/useAuth";

export default function OwnersList() {
    const [owners, setOwners] = useState([])
    const locale = useLocale();
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        async function fetchOwners() {
            try {
                const owners = await apiRequest(
                    `/api/owner/getOwners?userId=${user?.userId}`,
                    'GET'
                );
                setOwners(owners);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchOwners();
    }, [user]);

    console.log(owners);

    return (
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
                {owners.map((owner) => (
                    <Box key={owner.id}>
                        <Heading>
                            {owner.name}
                        </Heading>
                        <Link variant="primary" href={`/${locale}/owner/${owner.id}`}>
                            View details
                        </Link>
                    </Box>
                ))}
                <Box>
                    <Link href={`/${locale}/newOwner`}>Create new owner</Link>
                </Box>
            </Grid>
        </div>
    );
}