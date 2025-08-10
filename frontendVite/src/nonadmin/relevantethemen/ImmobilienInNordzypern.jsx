import HeaderRelevanteThemen from "../components/HeaderRelevanteThemen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ansprechpartner from "../components/Ansprechpartner";
import Zitat from "./Zitat";
import { useNavigate } from "react-router-dom";

const ImmobilienInNordzypern = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar></Navbar>
            <HeaderRelevanteThemen url='../bgueberzypern.webp' head1='IMMOBILIEN IN NORDZYPERN' head2='Mit uns investierst Du sicher und gewinnbringend'></HeaderRelevanteThemen>

            <div className="bg-[#f1f1f1] pt-20">
                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">DU MÖCHTEST IN NORDZYPERN IMMOBILIEN KAUFEN?</h2>
                <h3 className="text-3xl text-center text-[#093B3F] font-bold md:mb-10">Hier ist was Du wissen solltest.</h3>

                <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">Zypern, die drittgrößte Insel im Mittelmeer, hat sich in den letzten Jahren zu einem begehrten Ziel für Immobilieninvestitionen entwickelt. Die Insel bietet eine einzigartige Mischung aus mediterranem Klima, reicher Geschichte und moderner Annehmlichkeiten, die sowohl Touristen als auch Immobilienkäufer anzieht.</p>
                <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">Ein wesentlicher Anziehungspunkt für Investoren ist das günstige Steuerumfeld. Zypern bietet eine niedrige Unternehmenssteuer von 12,5% und hat zahlreiche Doppelbesteuerungsabkommen mit anderen Ländern geschlossen, was es besonders attraktiv für ausländische Investoren macht. Zudem gibt es eine Reihe von Steuervergünstigungen und Anreizen für den Immobilienkauf, einschließlich einer reduzierten Mehrwertsteuer auf den Kauf von Erstimmobilien.</p>
                <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">Der Immobilienmarkt in Zypern ist vielfältig und bietet eine breite Palette von Möglichkeiten, von luxuriösen Villen am Meer über moderne Apartments in städtischen Gebieten bis hin zu traditionellen Häusern in malerischen Dörfern. Besonders beliebt sind die Küstengebiete wie Limassol, Paphos und Larnaca. Limassol, bekannt für seine lebendige Atmosphäre und das pulsierende Geschäftsleben, hat in den letzten Jahren eine rasante Entwicklung erlebt, mit zahlreichen neuen Bauprojekten und einer verbesserten Infrastruktur.</p>
                <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">Paphos, das für seine historischen Stätten und seine malerische Umgebung bekannt ist, zieht viele Käufer an, die eine ruhige und dennoch luxuriöse Lebensweise suchen. Larnaca, mit seinem internationalen Flughafen und der langen Strandpromenade, bietet eine Mischung aus städtischem Komfort und entspanntem Inselleben. Neben den Küstengebieten gibt es auch im Landesinneren attraktive Immobilienoptionen, insbesondere für diejenigen, die die Ruhe und Authentizität der zyprischen Dörfer bevorzugen.</p>
                
                <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg mt-5 mb-5" onClick={() => navigate('/immobilien')}>ZU DEN IMMOBILIEN</button></center>


                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">Investiere mit Potenzial</h2>
                

                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">WARUM ZYPERN?</h2>

                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">FERIENWOHNUNG IN ZYPERN</h2>

                
                <Zitat></Zitat>

                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:pb-5">INVESTIEREN IN ZYPERN</h2>
            </div>
                
            <Ansprechpartner></Ansprechpartner>
            <Footer></Footer>
        </>
    )
}

export default ImmobilienInNordzypern;