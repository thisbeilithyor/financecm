import { useTranslation } from "react-i18next";
import { useState } from "react";

const Filter = ({setFilterState, filterState, applyFilter}) => {    
    const { t, i18n } = useTranslation();

    const [showFilter, setShowFilter] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilterState((previousState) => ({
            ...previousState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <>
            
            <center><button className="ml-auto w-38 md:w-55 text-xs md:text-lg bg-[#093B3F] text-white h-10 rounded-full" onClick={_ => showFilter ? setShowFilter(false) : setShowFilter(true)}>{showFilter ? t("immobilien.filter.filterAusblenden") : t("immobilien.filter.filterAnzeigen")}</button></center>
            {   showFilter && (
                <div className="bg-[#f1f1f1] mt-2 text-white p-4 rounded-xl border border-[#093B3F] shadow-lg w-[90vw] mx-auto space-y-4">
                    <h2 className="text-lg text-[#093B3F] font-semibold mb-2">{t("immobilien.filter.title1")}</h2>
                    <div className="flex gap-2">
                        <input type="number" className="w-1/2 p-2 rounded-md text-black border border-[#093B3F]" name="von" value={filterState.von} onChange={handleChange}></input>
                        <input type="number" className="w-1/2 p-2 rounded-md text-black border border-[#093B3F]" name="bis" value={filterState.bis} onChange={handleChange}></input>
                    </div>
                    <h2 className="text-lg text-[#093B3F] font-semibold mb-2">{t("immobilien.filter.title2")}</h2>
                    
                    <div className="flex gap-4">
                        <input className="accent-[#093B3F]" type="checkbox" id="haus" name="haus" checked={filterState.haus} onChange={handleChange}></input>
                        <label className="flex items-center gap-2 text-[#093B3F]" for="haus">{t("immobilien.filter.haus")}</label>
                        
                        <input className="accent-[#093B3F]" type="checkbox" id="wohnung" name="wohnung" checked={filterState.wohnung} onChange={handleChange}></input>
                        <label className="flex items-center gap-2 text-[#093B3F]" for="checkbox">{t("immobilien.filter.wohnung")}</label>
                    </div>
                    <button className="w-full md:w-[50%] md:ml-[25%] bg-[#093B3F] hover:bg-teal-600 text-white py-2 rounded-lg font-semibold transition" onClick={applyFilter}>{t("immobilien.filter.applyFilter")}</button>
                </div>
            )}
        </>
    )
}

export default Filter;