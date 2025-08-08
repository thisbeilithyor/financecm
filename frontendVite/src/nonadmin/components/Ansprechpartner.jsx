const Ansprechpartner = () => {
    return (
        <>
            <div className="bg-[#093B3F] lg:flex pt-10 pb-5">
                <div className="flex flex-col pr-20 pl-5 lg:w-[50vw]">
                <h2 className="text-white text-3xl font-bold mb-8">Ihr Ansprechpartner</h2>
                <p className="text-white text-lg text-justify">Alexander Meier und sein Team sind seit Jahren im Immobilienhandel in Zypern 
                    tätig und bieten umfassende Expertise und lokales Wissen. Sie sind Ihr idealer 
                    Ansprechpartner für den Kauf und Verkauf von Immobilien, bieten maßgeschneiderte 
                    Beratung und begleiten Sie professionell durch den gesamten Prozess. Vertrauen Sie auf ihre Erfahrung.</p>
                </div>
                <div className="flex lg:w-[50vw] pl-25 pr-30">
                    <div className="mr-5">
                        <img className="rounded-[15px] sm:w-md md:w-sm lg:w-sm" src='/geschaeftsfuehrer.webp'></img>
                    </div>
                    <div className="text-white">
                        <h3 className="text-xl font-bold">Alexander Meier</h3>
                        <span className="text-md font-bold">Geschäftsführer</span>
                        <p className="text-md mt-3 text-justify">Als Geschäftsführer von Finance Center Meier, 
                            ist er ein erfahrener Finanzexperte und Ihr verlässlicher 
                            Partner in Finanzangelegenheiten.</p>
                        <p className="text-md text-[#E9D3AD] mt-3">E-Mail: meier-finanz@gmx.de</p>
                        <p className="text-md text-[#E9D3AD] mt-1">Tel.: +49 (0) 841 - 98 17 858</p>
                        <p className="text-md text-[#E9D3AD] mt-1">Tel.: +49 (0) 172 - 77 45 656</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ansprechpartner;