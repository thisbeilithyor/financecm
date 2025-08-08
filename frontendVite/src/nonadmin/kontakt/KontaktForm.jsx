const KontaktForm = ({form, handleChange, handleSave}) => {
    return ( 
        <>
            <div className="bg-[#093B3F] mt-0">
            <form className="space-y-4 w-[60vw] m-auto">
                <label className="block text-white mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></input>

                <label className="block text-white mb-1">E-Mail</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} 
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></input>

                <label className="block text-white mb-1">Telefonnummer</label>
                <input type="text" name="phonenumber" value={form.phonenumber} onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></input>

                <label className="block text-white mb-1">Nachricht</label>
                <textarea type="" name="message" value={form.message} onChange={handleChange}
                className="w-full h-40 border border-white rounded-[2vw] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></textarea>

                <button className="w-full border border-white rounded-full px-3 py-2 text-[#093B3F] bg-white text-lg" type="button" onClick={handleSave}>Absenden</button>
            </form>

           
            </div>
        </>
    )
}

export default KontaktForm;