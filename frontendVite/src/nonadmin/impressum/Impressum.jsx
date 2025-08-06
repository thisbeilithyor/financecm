import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Impressum = () => {
    return (
        <>
        <Navbar></Navbar>
        <h1>Impressum</h1>
        <table>
            <tr>
                <td>
                    Alexander Meier
                </td>
                <td>
                    Manchingerstr. 10
                </td>
                <td>
                    85053 Ingolstadt
                </td>
                <td>
                    Deutschland
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
                    Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr
                </td>
                <td>
                    Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                </td>
                <br></br>
                <td>
                    Verantwortliche/r i.S.d. § 18 Abs. 2 MStV:
                </td>
                <td>
                    Alexander Meier
                </td>
            </tr>
        </table>

        <Ansprechpartner></Ansprechpartner>
        <Footer></Footer>
        </>
    )
}

export default Impressum;