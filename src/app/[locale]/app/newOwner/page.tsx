'use client'

import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {addOwner} from "@/types/owner/addOwner";
import {Heading, Input} from "@chakra-ui/react";
import {useTranslations} from "next-intl";
import {Field} from "@/components/ui/field";
import BackButton from "@/components/ui/BackButton";
import {useMutation} from "@tanstack/react-query";
import {apiRequest} from "@/lib/api/apiClient";

const page = () => {
    const {register, handleSubmit, formState: {isSubmitting}} = useForm<addOwner>()
    const t = useTranslations("forms.addOwner")

    const mutation = useMutation({
        mutationFn: (data: addOwner) => apiRequest("/api/owner/createOwner", "POST", data),
        onSuccess: (data: addOwner) => {
            alert(`Owner ${data.name} was added`)
    },
        onError: (error) => {
            console.error(error)
        }
    })

    const onSubmit: SubmitHandler<addOwner> = (data) => {
        mutation.mutate(data);
    }

    return (
        <>
            <BackButton>
                Back
            </BackButton>
            <Heading>
                heading
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field label={t("fields.name")} required>
                    <Input
                        {...register('name', {required: true})}
                        type="text"
                    />
                </Field>
                <Field label={t("fields.description")}>
                    <Input
                        {...register('description', {required: false})}
                        type="text"
                    />
                </Field>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                >
                    Create owner
                </button>
            </form>
        </>
    );
};

export default page;
