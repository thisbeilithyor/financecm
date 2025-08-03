const CustomerRequestItem = ({requestItem}) => {
    return (
        <>
            <p>Name: {requestItem.name}</p>
            <p>E-Mail: {requestItem.email}</p>
            <p>Telefonnummer: {requestItem.phonenumber}</p>
            <p>Nachricht: {requestItem.message}</p>
        </>
    )
}

export default CustomerRequestItem;