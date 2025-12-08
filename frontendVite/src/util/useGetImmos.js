import { useEffect } from "react";

const useGetImmos = (setImmosData, language, filterState, invokeAPIReq) => {
    useEffect(() => {
        const { von, bis, haus, wohnung } = filterState;
        const request = async () => {
            const response = await fetch(`/api/immo/getImmos?language=${language}&von=${von}&bis=${bis}&haus=${haus}&wohnung=${wohnung}`,  {
                method: 'GET',
                headers: {
                    'Accept-Content': 'application/json'
                }
            })
            const res = await response.json();
            setImmosData(res);
        }
        request();
    }, [language, invokeAPIReq]);
}


export default useGetImmos;