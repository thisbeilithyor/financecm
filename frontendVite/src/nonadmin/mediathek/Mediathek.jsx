import Navbar from "../components/Navbar.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Footer from "../components/Footer.jsx";

const videos = [
  { id: 1, src: "beeindruckende_historische_gebaeude.mp4", subtitle: "Beeindruckende historische Gebäude in Zypern" },
  { id: 2, src: "wunderschoene_landschaften_in_nord.mp4", subtitle: "Wunderschöne Landschaften im Norden Zyperns" },
  { id: 3, src: "immobilien_direkt_am.mp4", subtitle: "Immobilien direkt am Meer mit toller Infrastruktur" },
  { id: 4, src: "kultur_erlebnisse_in.mp4", subtitle: "Kulturelle Erlebnisse in der Region" },
  { id: 5, src: "mittelmeer_haefen.mp4", subtitle: "Mittelmeer Häfen entdecken" },
  { id: 6, src: "moderne_wohnanlagen.mp4", subtitle: "Moderne Wohnanlagen" },
  { id: 7, src: "einblicke_in_das_leben.mp4", subtitle: "Einblicke in das Leben vor Ort" },
  { id: 8, src: "beeindruckende_kuestenstraße.mp4", subtitle: "Beeindruckende Küstenstraße" },
  { id: 9, src: "entspanntes_leben_mit_pools.mp4", subtitle: "Entspanntes Leben mit Pools" },
  { id: 10, src: "einzigartige_architektur_in.mp4", subtitle: "Einzigartige Architektur" },
];

const VideoGallery = () => {
  const sortedVideos = [...videos].sort((a, b) => a.id - b.id);

  return (
    <>
        <Navbar></Navbar>
        <div className="bg-[#f1f1f1]">
        <center><h1 className="text-[#093B3F] font-bold text-4xl pt-10 pb-2">
            Machen Sie sich ein Bild von Zypern & Immobilien vor Ort
        </h1>
        <h3 className="text-[#093B3F] font-bold text-2xl pb-10" >Jetzt unsere Mediathek erforschen</h3></center>
        <div className="flex flex-wrap justify-center gap-4">
            {sortedVideos.map((video) => (
            <div key={video.id} className="rounded-[12px] w-[50%] md:w-[20%]">
                <video controls>
                <source src={`/media/${video.src}`} type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
                </video>
                <p className="text-[#093B3F] font-bold">{video.subtitle}</p>
            </div>
            ))}
        </div>
        </div>
         <IslandGraphic></IslandGraphic>

         <Ansprechpartner/>
         <Footer/>
    </>
  );
};

export default VideoGallery;