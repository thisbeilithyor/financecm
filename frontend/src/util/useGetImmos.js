import { useState, useEffect } from "react";

const useGetImmos = (setImmosData) => {
    useEffect(() => {
        const request = async () => {
            const response = await fetch('/api/getImmos',  {
                method: 'GET',
                headers: {
                    'Accept-Content': 'application/json'
                }
            })
            const res = await response.json();
            setImmosData(res);
        }
        request();
    }, []);
}


export default useGetImmos;