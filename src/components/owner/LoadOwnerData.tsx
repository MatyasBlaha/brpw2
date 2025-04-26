"use client"

import {useEffect, useState} from "react";
import {apiRequest} from "@/lib/api/apiClient";
import BackButton from "@/components/ui/BackButton";

export default function LoadOwnerData({ownerId}: {ownerId: string | string[] | undefined}) {
    const [owner, setOwner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOwners(ownerId: string) {
            try {
                setIsLoading(true);
                const response = await apiRequest<{ success: boolean; data: any }>(
                    `/api/owner/getOwner?ownerId=${ownerId}`,
                    'GET'
                );

                if (!response.success) {
                    throw new Error(response.message || 'Request failed');
                }

                console.log(response.data);
                setOwner(response.data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
                setOwner(null);
            } finally {
                setIsLoading(false);
            }
        }

        if (ownerId !== undefined) {
            fetchOwners(ownerId);
        }
    }, []);

    console.log(owner)

    return (
        <div>
            <BackButton>
                Back
            </BackButton>
            <h1>Owner ID: {owner.id}</h1>
            <p>Owner name: {owner.name}</p>
        </div>
    );
}