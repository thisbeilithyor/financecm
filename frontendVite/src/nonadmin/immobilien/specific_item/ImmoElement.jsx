import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import IslandGraphic from "../../components/IslandGraphic.jsx";
import UntereInfos from "./UntereInfos.jsx";
import Ansprechpartner2 from "../../components/Ansprechpartner2.jsx";
import Zahlungsinformationen from "./Zahlungsinformationen.jsx";
import Weitere from "./Weitere.jsx";
import { useLocation } from "react-router-dom";

const ImmoElement = () => {
    const { objectnr } = useParams();

    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [furtherImages, setFurtherImages] = useState([]);

    const location = useLocation();
    const {weitereImmos} = location.state || {};
    
    useEffect(() => {
        const reqData = async () => {
            const res = await fetch(`/api/immo/getImmoItem/${objectnr}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            if(res.status === 404){
                setMessage("Objekt nicht vorhanden");
            }
            else{
                const ress = await res.json();
                setData(ress);
            }

        }
        const reqFurtherImages = async () => {
            const res = await fetch(`/api/immo/getFurtherImages/${objectnr}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            if(res.status === 404){}
            else{
                const ress = await res.json();
                setFurtherImages(ress);
            }
        }
        reqData();
        reqFurtherImages();
    }, [])


    // <img class="mapImage" src={`/api/images/${data.mapImagePath}`}></img>
    // <img class="titleImage" src={`/api/images/${data.titleImagePath}`}></img>
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-[#f1f1f1]">

            {data && (
                <>
                <img className="relative w-[100vw] z-5" src={`/api/images/${data.mapImagePath}`}></img>

                <div className="relative w-[65vw] m-auto flex rounded-3xl bg-[#010101] mt-[-20px] z-10">
                    <div className="w-[50%]">
                        <img className="rounded-3xl" src={`/api/images/${data.titleImagePath}`}></img>
                    </div>
                    <div className="flex flex-col justify-between pt-3 pb-3 pl-3">
                        <p className="text-white text-lg">{data.city}</p>
                        <p className="text-white text-lg">Objekt Nr.: {data.objectnr}</p>
                        <p className="text-white text-lg">{data.description}</p>
                        <p className="text-white text-lg">+49 (0) 172 - 77 45 656</p>
                        <p className="text-white text-lg">meiner-finanz@gmx.de</p>
                    </div>
                </div>
                </>
                ) 
            }
            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:pb-10 md:pt-10">Entdecken Sie Wohnungen mit Garten: Ihre Wohnung direkt am Meer</h2>
            <h4 className="text-2xl text-center text-[#093B3F] font-bold">Ihre Wohnung in Zypern!</h4>
            <IslandGraphic></IslandGraphic>
            <div className="flex flex-wrap w-[80vw] m-auto gap-5">
                {data && (
                    <>
                        {furtherImages.map((item, index) => {
                            return (
                                <img className="rounded-xl w-[30%]" key={index} src={`/api/images/${item.imagePath}`}></img>
                            )
                        })}
                    </>
                )}
            </div>
            
            <div className="flex w-[80vw] m-auto">
                <UntereInfos immo={data}></UntereInfos>
                <Ansprechpartner2></Ansprechpartner2>
            </div>

            <h2>Über das Projekt</h2>
            <p>{data.uberDasProjekt}</p>

            <h2>Über den Standort</h2>
            <p>{data.uberStandort}</p>

            </div>
            <Zahlungsinformationen price={data.price}></Zahlungsinformationen>

            <Weitere immos={weitereImmos}></Weitere>

            <Footer></Footer>
        </>
    )
}

export default ImmoElement;