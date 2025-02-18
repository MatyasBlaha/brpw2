'use client'

import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {addOwner} from "@/types/owner/addOwner";
import {Heading, Input} from "@chakra-ui/react";
import {useTranslations} from "next-intl";
import {Field} from "@/components/ui/field";
import BackButton from "@/components/ui/BackButton";

const page = () => {
    const {register, handleSubmit, formState: {isSubmitting}} = useForm<addOwner>()
    const t = useTranslations("forms.addOwner")


    return (
        <>
            <BackButton>
                Back
            </BackButton>
            <Heading>
                heading
            </Heading>
            <form>
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
            </form>
        </>
    );
};

export default page;
