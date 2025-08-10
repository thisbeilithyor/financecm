const ChecklistEntry = ({item}) => {
    return (
        <>
            <div className="border rounded-xl w-[80vw] m-auto mt-3 pt-3 pl-3 pb-3">
                <p>Name: {item.name}</p>
                <p>E-Mail: {item.email}</p>
                <p>Telefonnummer: {item.phonenumber}</p>
                <p>Immobilientyp: {item.immobilientyp}</p>
                <p>Geplanter Kaufzeitraum: {item.kaufzeitraum}</p>
            </div>
        </>
    )
}

export default ChecklistEntry;