const CustomerRequestItem = ({requestItem}) => {
    return (
        <>
            <p>Name: {requestItem.name}</p>
            <p>E-Mail: {requestItem.email}</p>
            <p>Telefonnummer: {requestItem.phonenumber}</p>
            <p>Nachricht: {requestItem.message}</p>
            <p>Anfrage-Zeitpunkt: {requestItem.timestamp}</p>
        </>
    )
}

export default CustomerRequestItem;