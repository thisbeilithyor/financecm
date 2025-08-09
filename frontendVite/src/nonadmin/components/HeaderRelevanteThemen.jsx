const HeaderRelevanteThemen = ({prefix='./', head1, head2}) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                style={{ backgroundImage: `url('${prefix}bgueberzypern.webp')` }}
            ></div>
            <div className="relative flex flex-col items-center justify-center h-screen row">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">{head1}</h1>
                <h3 className="text-2xl text-center text-white font-bold mt-3">{head2}</h3>
            </div>
        </>
    )
}

export default HeaderRelevanteThemen;