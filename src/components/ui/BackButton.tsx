// components/BackButton.jsx
'use client'

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const BackButton = ({ children, onClick, ...props }) => {
    const router = useRouter();

    const handleClick = (e) => {
        router.back();
        onClick?.(e);
    };

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    );
};

export default BackButton;