import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useWebsiteVisitTracker = () => {
    const location = useLocation();

    useEffect(() => {

        console.log(location.pathname);
        const handleVisibilityChange = () => {
            if(document.visibilityState === 'hidden'){
                const blob = new Blob([JSON.stringify({path: location.pathname})], { type: 'application/json' });
                navigator.sendBeacon('/api/kpi/track', blob);
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return (() => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        })
    }, [location])
}

export default useWebsiteVisitTracker;