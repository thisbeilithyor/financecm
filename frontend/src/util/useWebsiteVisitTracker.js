import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useWebsiteVisitTracker = () => {
    const location = useLocation();

    useEffect(() => {
        fetch('/api/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: location.pathname
            })
        })
    }, [location]);
}

export default useWebsiteVisitTracker;