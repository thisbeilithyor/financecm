import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

const ImageElement = () => {
    const { objectnr } = useParams();

    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    
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
                console.log(ress);
                console.log(ress.objectnr);
            }

        }
        reqData();
    }, [])


    // <img class="mapImage" src={`/api/images/${data.mapImagePath}`}></img>
    // <img class="titleImage" src={`/api/images/${data.titleImagePath}`}></img>
    return (
        <>
            <Navbar></Navbar>

            <img className="mapImage" src={`/mapbeispiel.png`}></img>
            <div className="immoItemWrapper">
                <div className="titleImgWrapper">
                    <img className="titleImage" src={`/a.jpg`}></img>
                </div>
                <div className="txtWrapper">
                    <p>Yeni Erenköy</p>
                    <p>Objekt Nr.: 425</p>
                    <p>-Komfort und Bequemlichkeit</p>
                    <p>-blablabla</p>
                    <p>-blablabla</p>
                    <p>+49 (0) 172 - 77 45 656</p>
                    <p>meiner-finanz@gmx.de</p>
                </div>
            </div>
            {data && (
                <>
                    <h3>{data.city}</h3>
                    <p>{data.objectnr}</p>
                </>
                ) 
            }
            <center><h2 className="darkText immoSecHeading">Entdecken Sie Wohnungen mit Garten: Ihre Wohnung direkt am Meer</h2></center>
            <center><h4 className="darkText">Ihre Wohnung in Zypern!</h4></center>
            <Footer></Footer>
        </>
    )
}

export default ImageElement;