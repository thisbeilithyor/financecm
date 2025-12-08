import { useTranslation } from "react-i18next";

const Filter = ({setFilterState, filterState, applyFilter}) => {    
    const { t, i18n } = useTranslation();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilterState((previousState) => ({
            ...previousState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <>
            <div>
                <h2>{t("immobilien.filter.title1")}</h2>
                <input type="number" name="von" value={filterState.von} onChange={handleChange}></input>
                <input type="number" name="bis" value={filterState.bis} onChange={handleChange}></input>
            
                <h2>{t("immobilien.filter.title2")}</h2>
                <input type="checkbox" id="haus" name="haus" checked={filterState.haus} onChange={handleChange}></input>
                <label for="haus">{t("immobilien.filter.haus")}</label>
                <input type="checkbox" id="wohnung" name="wohnung" checked={filterState.wohnung} onChange={handleChange}></input>
                <label for="checkbox">{t("immobilien.filter.wohnung")}</label>

                <button onClick={applyFilter}>{t("immobilien.filter.applyFilter")}</button>
            </div>
        </>
    )
}

export default Filter;