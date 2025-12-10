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

        <hr></hr>

        <label className="block mb-1">PDF-Datei (Deutsch)</label>
        <input
            type="file"
            name="pdf_de"
            accept=".pdf"
            onChange={handleImageChange}
        />
        {
            imageUploadData.pdf_de && (
                <p>{imageUploadData.pdf_de.name}</p>
            )
        }
        <label className="block mb-1">PDF-Datei (Englisch)</label>
        <input
            type="file"
            name="pdf_en"
            accept=".pdf"
            onChange={handleImageChange}
        />
        {
            imageUploadData.pdf_en && (
                <p>{imageUploadData.pdf_en.name}</p>
            )
        }
        <label className="block mb-1">PDF-Datei (Russisch)</label>
        <input
            type="file"
            name="pdf_ru"
            accept=".pdf"
            onChange={handleImageChange}
        />
        {
            imageUploadData.pdf_ru && (
                <p>{imageUploadData.pdf_ru.name}</p>
            )
        }

        <hr></hr>

        <h2>Stadt (Russisch erfordert oftmals eine andersartige Schreibweise)</h2>
        {/* Stadt Deutsch*/}
        <label className="block mb-1">Stadt (Deutsch)</label>
        <input
            type="text"
            name="city_de"
            value={formData.city_de}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />
        <label className="block mb-1">Stadt (Englisch)</label>
        <input
            type="text"
            name="city_en"
            value={formData.city_en}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />
        <label className="block mb-1">Stadt (Russisch)</label>
        <input
            type="text"
            name="city_ru"
            value={formData.city_ru}
            onChange={handleChange}
            className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        <hr></hr>

        <h2>Beschreibungen</h2>
        {/* Beschreibung Deutsch*/}
        <label className="block mb-1">Beschreibung (Deutsch)</label>
        <textarea
            name="description_de"
            value={formData.description_de}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        {/* Beschreibung Englisch*/}
        <label className="block mb-1">Beschreibung (Englisch)</label>
        <textarea
            name="description_en"
            value={formData.description_en}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        {/* Beschreibung Russich*/}
        <label className="block mb-1">Beschreibung (Russich)</label>
        <textarea
            name="description_ru"
            value={formData.description_ru}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <hr></hr>

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

        <hr></hr>

        {/* Über das Projekt */}
        <label className="block mb-1">Über das Projekt (Deutsch)</label>
        <textarea
            name="uberDasProjekt_de"
            value={formData.uberDasProjekt_de}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <label className="block mb-1">Über das Projekt (Englisch)</label>
        <textarea
            name="uberDasProjekt_en"
            value={formData.uberDasProjekt_en}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <label className="block mb-1">Über das Projekt (Russisch)</label>
        <textarea
            name="uberDasProjekt_ru"
            value={formData.uberDasProjekt_ru}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />

        <hr></hr>

        {/* Über den Standort */}
        <label className="block mb-1">Über den Standort (Deutsch)</label>
        <textarea
            name="uberStandort_de"
            value={formData.uberStandort_de}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <label className="block mb-1">Über den Standort (Englisch)</label>
        <textarea
            name="uberStandort_en"
            value={formData.uberStandort_en}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <label className="block mb-1">Über den Standort (Russisch)</label>
        <textarea
            name="uberStandort_ru"
            value={formData.uberStandort_ru}
            onChange={handleChange}
            className="w-full h-24 border border-white rounded-[2vw] px-3 py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        </form>

    )
}

export default AddImmoForm;