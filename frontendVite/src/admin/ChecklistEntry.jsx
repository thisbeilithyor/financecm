const ChecklistEntry = ({item}) => {
    return (
        <>
            <p>Name: {item.name}</p>
            <p>E-Mail: {item.email}</p>
            <p>Telefonnummer: {item.phonenumber}</p>
            <p>Immobilientyp: {item.immobilientyp}</p>
            <p>Geplanter Kaufzeitraum: {item.kaufzeitraum}</p>
        </>
    )
}

export default ChecklistEntry;