import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditImmo = () => {
    const { objectnr } = useParams();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const reqData = async () => {
            const res = await fetch(`/api/getImmoItem/${objectnr}`, {
                method: 'GET',
                headers: {
                    'Accept-Content': 'application/json'
                }
            })
            if(res.status === 404){
                setMessage("Objekt nicht vorhanden");
            }
            else{
                const ress = await res.json();
                console.log(ress);
            }

        }
        reqData();
    })

    return (
        <>
        <p>EditImmo {objectnr}</p>
        <p>{message}</p>
        </>
    )
}

export default EditImmo;