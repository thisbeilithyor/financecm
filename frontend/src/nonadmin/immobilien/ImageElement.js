import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import IslandGraphic from "../components/IslandGraphic.js";

const ImageElement = () => {
    const { objectnr } = useParams();

    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [furtherImages, setFurtherImages] = useState([]);
    
    useEffect(() => {
        const reqData = async () => {
            const res = await fetch(`/api/getImmoItem/${objectnr}`, {
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
            const res = await fetch(`/api/getFurtherImages/${objectnr}`, {
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
            <Footer></Footer>
        </>
    )
}

export default ImageElement;