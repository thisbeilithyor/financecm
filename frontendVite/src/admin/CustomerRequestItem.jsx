const CustomerRequestItem = ({requestItem}) => {
    return (
        <>
            <div className="border rounded-xl w-[80vw] m-auto mt-3 pt-3 pl-3 pb-3">
                <p>Name: {requestItem.name}</p>
                <p>E-Mail: {requestItem.email}</p>
                <p>Telefonnummer: {requestItem.phonenumber}</p>
                <p>Nachricht: {requestItem.message}</p>
                <p>Anfrage-Zeitpunkt: {requestItem.timestamp}</p>
            </div>
        </>
    )
}

export default CustomerRequestItem;