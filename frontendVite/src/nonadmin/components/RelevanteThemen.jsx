import { Link } from "react-router-dom";

const RelevanteThemen = () => {
    return (
        <>
            <section className="bg-[#f1f1f1] pt-15 pb-15">
            <center><h2 className="text-[#093B3F] font-bold text-4xl pb-10 max-md:text-xl max-md:pl-1 max-md:pr-1">
                Relevante Themen bevor Sie eine Immobilie auf Zypern kaufen
            </h2></center>

            
            <div className="md:flex w-[80vw] m-auto gap-x-5 md:justify-center">
                <Link to="weitere/immobilie-nordzypern" className="md:w-[40vw] max-md:m-auto max-md:pb-5 text-center">
                    <img className="rounded-xl" src='relImg1.webp'></img>
                    <p className="m-auto font-bold text-lg mt-1">Warum Immobilien im Norden Zyperns kaufen?</p>
                </Link>
                <div className="md:w-[40vw] max-md:m-auto max-md:pb-5 text-center">
                    <img src='relImg2.webp'></img>
                    <p className="m-auto font-bold text-lg mt-1">Wie kann man eine Wohnung auf Zypern kaufen?</p>
                </div>
                <div className="md:w-[40vw] max-md:m-auto max-md:pb-5 text-center">
                    <img src='relImg3.webp'></img>
                    <p className="m-auto font-bold text-lg mt-1">Hilfreiche Tipps für den Hauskauf auf Zypern</p>
                </div>
            </div>
            
            </section>
        </>
    )
}

export default RelevanteThemen;