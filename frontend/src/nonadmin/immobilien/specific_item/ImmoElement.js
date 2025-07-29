import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import IslandGraphic from "../../components/IslandGraphic.js";
import UntereInfos from "./UntereInfos.js";
import Ansprechpartner2 from "../../components/Ansprechpartner2.js";

const ImageElement = () => {
    const { objectnr } = useParams();

    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [furtherImages, setFurtherImages] = useState([]);
    
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
            {data && (
                <>
                    <img class="mapImage" src={`/api/images/${data.mapImagePath}`}></img>
                    <div className="immoItemWrapper">
                        <div className="titleImgWrapper">
                            <img className="titleImage" src={`/api/images/${data.titleImagePath}`}></img>
                        </div>
                        <div className="txtWrapper">
                            <p>{data.city}</p>
                            <p>Objekt Nr.: {data.objectnr}</p>
                            <p>{data.description}</p>
                            <p>+49 (0) 172 - 77 45 656</p>
                            <p>meiner-finanz@gmx.de</p>
                        </div>
                    </div>
                </>
                ) 
            }
            <center><h2 className="darkText immoSecHeading">Entdecken Sie Wohnungen mit Garten: Ihre Wohnung direkt am Meer</h2></center>
            <center><h4 className="darkText">Ihre Wohnung in Zypern!</h4></center>
            <IslandGraphic></IslandGraphic>
            <div className="furtherImagesWrapper">
                {data && (
                    <>
                        {furtherImages.map((item, index) => {
                            return (
                                <img key={index} src={`/api/images/${item.imagePath}`}></img>
                            )
                        })}
                    </>
                )}
            </div>
            
            <center><h2 class="darkText">Zahlen & Fakten</h2></center>

            <div style={{display: "flex"}}>
                <UntereInfos immo={data}></UntereInfos>
                <Ansprechpartner2></Ansprechpartner2>
            </div>

            <h2>Über das Projekt</h2>
            <p>{data.uberDasProjekt}</p>

            <h2>Über den Standort</h2>
            <p>{data.uberStandort}</p>

            

            <Footer></Footer>
        </>
    )
}

export default ImageElement;