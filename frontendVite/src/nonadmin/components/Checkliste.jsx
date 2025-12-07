import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Checkliste = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="fixed bottom-0 left-15 z-50 bg-[#0d545a] h-13 w-50 flex justify-center rounded-tl-3xl rounded-tr-3xl">
                <Link to="checklist" className="text-white pt-3">{t("checklist.checklist.heading")}</Link>
            </div>
        </>
    )
}

export default Checkliste;