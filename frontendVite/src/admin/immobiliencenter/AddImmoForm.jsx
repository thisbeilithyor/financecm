import "./addimmo.css";

const AddImmoForm = ({ formData, handleChange, handleImageChange, imageUploadData }) => {

    return (
    <form className="space-y-6 w-[60vw] m-auto bg-[#093B3F] p-8 rounded-lg text-white">
        {/* Objektnr */}
        <label className="block mb-1">Objektnr.</label>
        <input
            type="number"
            name="objectnr"
            value={formData.objectnr}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Stadt */}
        <label className="block mb-1">Stadt</label>
        <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Beschreibung */}
        <label className="block mb-1">Beschreibung</label>
        <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Kartenbild */}
        <label className="block mb-1">Kartenbild</label>
        <input
            type="file"
            accept="image/*"
            name="mapImage"
            onChange={handleImageChange}
            className="block mb-2"
        />
        {imageUploadData.mapImage && (
            <img
            src={imageUploadData.mapImage}
            alt="Kartenbild"
            className="w-24 rounded-md mb-4 border border-white"
            />
        )}

        {/* Titelbild */}
        <label className="block mb-1">Titelbild</label>
        <input
            type="file"
            accept="image/*"
            name="titleImage"
            onChange={handleImageChange}
            className="block mb-2"
        />
        {imageUploadData.titleImage && (
            <img
            src={imageUploadData.titleImage}
            alt="Titelbild"
            className="w-24 rounded-md mb-4 border border-white"
            />
        )}

        {/* Weitere Bilder */}
        <label className="block mb-1">Weitere Bilder</label>
        <input
            type="file"
            accept="image/*"
            multiple
            name="furtherImages"
            onChange={handleImageChange}
            className="block mb-2"
        />
        <div className="flex flex-wrap gap-3 mb-6">
            {imageUploadData.furtherImages &&
            imageUploadData.furtherImages.map((imageURL, idx) => (
                <img
                key={idx}
                src={imageURL}
                alt={`Weiteres Bild ${idx + 1}`}
                className="w-24 rounded-md border border-white"
                />
            ))}
        </div>

        {/* Checkboxen */}
        {[
            { label: "Haus?", name: "house" },
            { label: "Bad vorhanden?", name: "bathroom" },
            { label: "Supermarkt in der Nähe?", name: "supermarket" },
            { label: "Stromversorgung?", name: "electricity" },
            { label: "Wasserversorgung?", name: "water" },
            { label: "Pool?", name: "pool" },
            { label: "Garten?", name: "garden" },
            { label: "Direkt am Meer?", name: "atOcean" },
            { label: "Im Homecarousel anzeigen?", name: "carouselObject" },
        ].map(({ label, name }) => (
            <label key={name} className="flex items-center space-x-2">
            <input
                type="checkbox"
                name={name}
                checked={formData[name]}
                onChange={handleChange}
                className="accent-[#093B3F] w-5 h-5"
            />
            <span>{label}</span>
            </label>
        ))}

        {/* Preis */}
        <label className="block mb-1">Preis (€)</label>
        <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Fläche */}
        <label className="block mb-1">Fläche (m²)</label>
        <input
            type="number"
            name="squareMeters"
            value={formData.squareMeters}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Zahlungsdauer */}
        <label className="block mb-1">Zahlungsdauer (Monate)</label>
        <input
            type="number"
            name="paymentDuration"
            value={formData.paymentDuration}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Baujahr */}
        <label className="block mb-1">Baujahr (MM.YYYY)</label>
        <input
            type="text"
            name="buildingFinished"
            value={formData.buildingFinished}
            onChange={handleChange}
            placeholder="MM.YYYY"
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Über das Projekt */}
        <label className="block mb-1">Über das Projekt</label>
        <textarea
            name="uberDasProjekt"
            value={formData.uberDasProjekt}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Über den Standort */}
        <label className="block mb-1">Über den Standort</label>
        <textarea
            name="uberStandort"
            value={formData.uberStandort}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        </form>

    )
}

export default AddImmoForm;