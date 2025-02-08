import {useTranslations} from "next-intl";

export default function Page() {
    const t = useTranslations("HomePage")

    return (
        <div className='conteiner'>{t("title")}</div>
    );
}