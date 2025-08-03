const KontaktForm = (form, handleChange) => {
    return ( 
        <>
            <form>
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}></input>

                <label>E-Mail</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>

                <label>Telefonnummber</label>
                <input type="text" name="phonenumber" value={form.phonenumber} onChange={handleChange}></input>

                <label>Nachricht</label>
                <input type="text" name="message" value={form.message} onChange={handleChange}></input>
            </form>
        
        </>
    )
}

export default KontaktForm;