import { Link } from "react-router-dom";

const Checkliste = () => {
    return (
        <>
            <div className="fixed bottom-0 left-15 z-50 bg-[#0d545a] h-13 w-50 flex justify-center rounded-tl-3xl rounded-tr-3xl">
                <Link to="checklist" className="text-white pt-3">Immobilien Checkliste</Link>
            </div>
        </>
    )
}

export default Checkliste;