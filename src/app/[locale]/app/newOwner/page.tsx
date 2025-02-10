'use client'

import React from 'react';
import {Button, Heading} from "@chakra-ui/react";
import BackButton from "@/components/ui/BackButton";

function Page(props) {

    return (
        <div>
            <BackButton>Go Back</BackButton>
            <Heading>
                Create new owner
            </Heading>
        </div>
    );
}

export default Page;