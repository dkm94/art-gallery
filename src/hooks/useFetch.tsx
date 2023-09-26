import { useState, useEffect } from "react";

const useFetch = (url:string, options:any) => {
    const [ response, setResponse ] = useState<any>(null)
    const [ error, setError ] = useState<string>("")
    const [ isPending, setIsPending ] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async ():Promise<void> => {
            try {
                setIsPending(true)
                const res: Response = await fetch(url, {
                    ...options
                    });
                const json: any = await res.json();
                const { gallery } = json;
                setResponse(gallery);
            } catch (error: any) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsPending(false)
            }
        }
        fetchData();
    }, [])
  return {
    response,
    error,
    isPending
  }
}

export default useFetch