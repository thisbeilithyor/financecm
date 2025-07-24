import "./addimmo.css";

const AddImmoForm = ({ formData, handleChange, handleImageChange, imageUploadData }) => {

    return (
    <form>
        <label>Objektnr.</label>
        <input type="number" name="objectnr" value={formData.objectnr} onChange={handleChange}></input>

        <label>Stadt</label>
        <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
        />

        <label>Beschreibung</label>
        <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
        />

        <label>Kartenbild</label>
        <input type="file" accept="image/*" name="mapImage" onChange={handleImageChange}/>
        <img style={{width: 100}} src={imageUploadData.mapImage}></img>

        <label>Titelbild</label>
        <input type="file" accept="image/*" name="titleImage" onChange={handleImageChange}/>
        <img style={{width: 100}} src={imageUploadData.titleImage}></img>

        <label>Weitere Bilder</label>
        <input type="file" accept="image/*" multiple name="furtherImages" onChange={handleImageChange}/>
        { imageUploadData.furtherImages && imageUploadData.furtherImages.map((imageURL) => {
            return <img style={{width: 100}} src={imageURL}></img>
        })}

        <label>Haus?</label>
        <input
            type="checkbox"
            name="house"
            checked={formData.house}
            onChange={handleChange}
        />

        <label>Preis (€)</label>
        <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
        />

        <label>Fläche (m²)</label>
        <input
            type="number"
            name="squareMeters"
            value={formData.squareMeters}
            onChange={handleChange}
        />

        <label>Bad vorhanden?</label>
        <input
            type="checkbox"
            name="bathroom"
            checked={formData.bathroom}
            onChange={handleChange}
        />

        <label>Supermarkt in der Nähe?</label>
        <input
            type="checkbox"
            name="supermarket"
            checked={formData.supermarket}
            onChange={handleChange}
        />

        <label>Stromversorgung?</label>
        <input
            type="checkbox"
            name="electricity"
            checked={formData.electricity}
            onChange={handleChange}
        />

        <label>Wasserversorgung?</label>
        <input
            type="checkbox"
            name="water"
            checked={formData.water}
            onChange={handleChange}
        />

        <label>Pool?</label>
        <input
            type="checkbox"
            name="pool"
            checked={formData.pool}
            onChange={handleChange}
        />

        <label>Garten?</label>
        <input
            type="checkbox"
            name="garden"
            checked={formData.garden}
            onChange={handleChange}
        />

        <label>Direkt am Meer?</label>
        <input
            type="checkbox"
            name="atOcean"
            checked={formData.atOcean}
            onChange={handleChange}
        />

        <label>Zahlungsdauer (Monate)</label>
        <input
            type="number"
            name="paymentDuration"
            value={formData.paymentDuration}
            onChange={handleChange}
        />

        <label>Baujahr (MM.YYYY)</label>
        <input
            type="text"
            name="buildingFinished"
            value={formData.buildingFinished}
            onChange={handleChange}
            placeholder="MM.YYYY"
        />

        <label>Über das Projekt</label>
        <textarea
            name="uberDasProjekt"
            value={formData.uberDasProjekt}
            onChange={handleChange}
        />

        <label>Über den Standort</label>
        <textarea
            name="uberStandort"
            value={formData.uberStandort}
            onChange={handleChange}
        />

        <label>Im Homecarousel anzeigen?</label>
        <input
            type="checkbox"
            name="carouselObject"
            checked={formData.carouselObject}
            onChange={handleChange}
        />
    </form>
    )
}

export default AddImmoForm;