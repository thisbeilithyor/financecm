const Zitat = () => {
    return (
        <>
            <div className="flex w-[80vw] m-auto">
                <div className="flex flex-col justify-center w-[60%] mr-20">
                    <p className="text-2xl italic font-light">"Eine Investition in Immobilien auf Zypern bietet nicht nur hohe Renditen, sondern auch die Möglichkeit, in einem paradiesischen Umfeld zu leben und zu prosperieren."</p>
                    <p className="font-bold text-3xl pt-5">Alexander Meier</p>
                </div>
                <img className="rounded-4xl w-[30%]" src="../geschaeftsfuehrer.webp"></img>
            </div>
        </>
    )
}

export default Zitat;