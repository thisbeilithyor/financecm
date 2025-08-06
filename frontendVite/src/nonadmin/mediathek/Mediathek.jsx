import Navbar from "../components/Navbar.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import "../index.css";

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
        <div className="video-section">
        <h1 className="video-section-title">
            Machen Sie sich ein Bild von Zypern & Immobilien vor Ort
        </h1>
        <div className="video-grid">
            {sortedVideos.map((video) => (
            <div key={video.id} className="video-card">
                <video controls width="100%">
                <source src={`/media/${video.src}`} type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
                </video>
                <p className="video-subtitle">{video.subtitle}</p>
            </div>
            ))}
        </div>
        </div>
         <IslandGraphic></IslandGraphic>
    </>
  );
};

export default VideoGallery;