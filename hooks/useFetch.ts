import {useCallback, useEffect, useState} from "react";

/**
 * Hook that introduce loading functionality, manual error setting for user fetching.
 * - adapt the raw data int to either data or error
 * */
const useFetch = <T> (fetchFunction: () => Promise<T>, autoFetch: boolean = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);



    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setData(result);
        } catch (err) {
            // @ts-ignore
            setError(err instanceof Error ? err : new Error("An error occurred."));
        } finally {
            setLoading(false);
        }

    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    const run = useCallback(async () => {
        await fetchData();
    }, [fetchFunction]);

    useEffect(() => {
        if (!autoFetch) return;

        void run(); // the run always resolve
    }, [autoFetch]);

    return { data, loading, error, run, reset };
}

export default useFetch;