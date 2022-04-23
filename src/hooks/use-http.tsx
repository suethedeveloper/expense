import { useCallback, useState } from "react";
import RequestInfo from "../types/RequestInfo";

const useHttp = (applyDataFn: (data: []) => void) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const sendRequest = useCallback(async (requestConfig: RequestInfo) => {
        setIsLoading(true);
        setError('');
        
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : "GET",
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyDataFn(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message || 'Something went wrong!');
            }
        }
        setIsLoading(false);
    },[applyDataFn]);

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;