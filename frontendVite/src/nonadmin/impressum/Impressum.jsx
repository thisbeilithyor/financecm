import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { useTranslation } from "react-i18next";

const Impressum = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
        <Navbar></Navbar>
        <h1 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold pt-3 pb-6">
            {t("impressum.impressum.title")}
        </h1>

        <div className="w-[85vw] md:w-[70vw] m-auto text-[#093B3F]">
            <table className="w-full border-collapse">
            <tbody className="text-md md:text-lg">
                <tr className="border-b">
                <td className="font-semibold py-2 pr-4">
                    {t("impressum.impressum.name")}
                </td>
                <td className="py-2">
                    {t("impressum.impressum.address.street")}
                </td>
                </tr>

                <tr className="border-b">
                <td className="font-semibold py-2 pr-4">Ort</td>
                <td className="py-2">85053 Ingolstadt</td>
                </tr>

                <tr className="border-b">
                <td className="font-semibold py-2 pr-4">
                    {t("impressum.impressum.address.country")}
                </td>
                <td className="py-2">
                    {t("impressum.impressum.address.country")}
                </td>
                </tr>

                <tr className="border-b">
                <td className="font-semibold py-2 pr-4">Telefon</td>
                <td className="py-2">+49 841 9817 858</td>
                </tr>

                <tr className="border-b">
                <td className="font-semibold py-2 pr-4">E-Mail</td>
                <td className="py-2">
                    <a
                    href="mailto:meier-finanz@gmx.de"
                    className="underline hover:text-[#0b555b]"
                    >
                    meier-finanz@gmx.de
                    </a>
                </td>
                </tr>

                <tr className="border-b">
                <td className="font-semibold py-2 pr-4">
                    {t("impressum.impressum.platform")}
                </td>
                <td className="py-2">
                    {t("impressum.impressum.statement")}
                </td>
                </tr>

                <tr>
                <td className="font-semibold py-2 pr-4">
                    {t("impressum.impressum.verantwortlicher")}
                </td>
                <td className="py-2">
                    {t("impressum.impressum.name")}
                </td>
                </tr>
            </tbody>
            </table>
        </div>

        <Ansprechpartner></Ansprechpartner>
        <Footer></Footer>
        </>
    )
}

export default Impressum;