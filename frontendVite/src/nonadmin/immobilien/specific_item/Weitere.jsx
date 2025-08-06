const Weitere = ({immos}) => {

    return ( 
        <>
            <h2>Andere Interessante Immobilienprojekte in Nordzypern</h2>
            {immos && immos.map((immo) => { 
                return(
                    <>
                        <img src={`/api/images/${immo.titleImagePath}`}></img>
                        <p>{immo.price}</p>
                    </>
                )
            })}
        </>
    )
}

export default Weitere;