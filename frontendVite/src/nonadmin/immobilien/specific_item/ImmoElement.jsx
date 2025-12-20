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
import Ansprechpartner from "../../components/Ansprechpartner.jsx";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const ImmoElement = () => {
    const { objectnr } = useParams();

    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [furtherImages, setFurtherImages] = useState([]);

    const location = useLocation();
    const {weitereImmos} = location.state || {};

    const {t, i18n} = useTranslation();
    const language = i18n.language;
    
    //request data
    useEffect(() => {
        const reqData = async () => {
            const res = await fetch(`/api/immo/getImmoItem/${objectnr}?language=${language}`, {
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
        reqData();
    }, [language])

    //request images
    useEffect(() => {
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
        reqFurtherImages();
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-[#f1f1f1] pb-8">

            {data && (
                <>
                <div className="md:hidden pt-3">
                    <img className="rounded-xl w-[85vw] m-auto" src={`/file/${data.titleImagePath}`}></img>
                    <div className="flex flex-col w-[85vw] m-auto justify-between pt-3 pb-3 pl-3">
                        <p className="text-lg text-[#093B3F]">{t("immobilien.specific_item.immoElement.stadtname")} {data.city}</p>
                        <p className="text-lg text-[#093B3F]">{t("immobilien.specific_item.immoElement.objectNumber")} {data.objectnr}</p>
                        <p className="text-lg text-[#093B3F]">{data.description}</p>
                    </div>
                </div>

                <div className="max-md:hidden">
                <img className="relative w-[100vw] z-5" src={`/file/${data.mapImagePath}`}></img>

                <div className="relative w-[65vw] m-auto flex rounded-3xl bg-[#010101] mt-[-20px] z-10">
                    <div className="w-[50%]">
                        <img className="rounded-3xl" src={`/file/${data.titleImagePath}`}></img>
                    </div>
                    <div className="flex flex-col justify-between pt-3 pb-3 pl-3">
                        <p className="text-white text-lg">{data.city}</p>
                        <p className="text-white text-lg">{t("immobilien.specific_item.immoElement.objectNumber")} {data.objectnr}</p>
                        <p className="text-white text-lg">{data.description}</p>
                        <p className="text-white text-lg">+49 (0) 172 - 77 45 656</p>
                        <p className="text-white text-lg">meiner-finanz@gmx.de</p>
                    </div>
                </div>
                </div>
                </>
                ) 
            }
            <h2 className="hidden text-4xl text-center text-[#093B3F] font-bold md:pb-10 md:pt-10">{t("immobilien.specific_item.immoElement.mainHeading")}</h2>
            <h4 className="hidden text-2xl text-center text-[#093B3F] font-bold">{t("immobilien.specific_item.immoElement.subHeading")}</h4>
            
            <div className="lg:hidden">
                <UntereInfos immo={data}></UntereInfos>
            </div>
            {
                !!data.PDFexisting && (
                    <center>
                        <Link to= {`/file/${data.objectnr}_${language}.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 w-50 md:w-55 text-xs md:text-lg bg-[#093B3F] text-white h-12 justify-center rounded-full">Infos hier herunterladen</Link>
                    </center>
                )
            }
            
            
            <div className="flex flex-wrap w-[80vw] m-auto gap-5 mt-5">
                {data && (
                    <>
                        {furtherImages.map((item, index) => {
                            return (
                                <img className="rounded-xl w-[30%]" key={index} src={`/file/${item.imagePath}`}></img>
                            )
                        })}
                    </>
                )}
            </div>

            <IslandGraphic prefix="../"></IslandGraphic>

            
            <div className="max-lg:hidden flex w-[80vw] m-auto">
                <UntereInfos immo={data}></UntereInfos>
                <Ansprechpartner2></Ansprechpartner2>
            </div>

            <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:pb-10 md:pt-10">{t("immobilien.specific_item.immoElement.projectHeading")}</h2>
            <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-md md:text-lg">{data.uberDasProjekt}</p>

            <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:pb-10 md:pt-10">{t("immobilien.specific_item.immoElement.locationHeading")}</h2>
            <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-md md:text-lg">{data.uberStandort}</p>

            
            <Zahlungsinformationen price={data.price}></Zahlungsinformationen>
            </div>
            <Ansprechpartner />
            <Footer></Footer>
        </>
    )
}

export default ImmoElement;