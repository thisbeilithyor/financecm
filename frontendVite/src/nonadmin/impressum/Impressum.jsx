import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { useTranslation } from "react-i18next";

const Impressum = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
        <Navbar></Navbar>
        <h1>{t("impressum.impressum.title")}</h1>
        <table>
            <tr>
                <td>
                    {t("impressum.impressum.name")}
                </td>
                <td>
                    {t("impressum.impressum.address.street")}
                </td>
                <td>
                    85053 Ingolstadt
                </td>
                <td>
                    {t("impressum.impressum.address.country")}
                </td>
                <br></br>
                <td>
                    Tel.: +49 841 9817 858
                </td>
                <td>
                    E-Mail: meier-finanz@gmx.de
                </td>
                <br></br>
                <td>
                    {t("impressum.impressum.platform")}
                </td>
                <td>
                    {t("impressum.impressum.statement")}
                </td>
                <br></br>
                <td>
                    {t("impressum.impressum.verantwortlicher")}
                </td>
                <td>
                    {t("impressum.impressum.name")}
                </td>
            </tr>
        </table>

        <Ansprechpartner></Ansprechpartner>
        <Footer></Footer>
        </>
    )
}

export default Impressum;