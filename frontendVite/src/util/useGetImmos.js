import { useEffect } from "react";

const useGetImmos = (setImmosData, language) => {
    useEffect(() => {
        const request = async () => {
            const response = await fetch(`/api/immo/getImmos?language=${language}`,  {
                method: 'GET',
                headers: {
                    'Accept-Content': 'application/json'
                }
            })
            const res = await response.json();
            setImmosData(res);
        }
        request();
    }, [language]);
}


export default useGetImmos;