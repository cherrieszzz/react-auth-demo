import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(false)
    //const {error, isDepending, data} = useFetch('http://jsonplaceholder.typicode.com/posts')

    useEffect(() => {
        fetch(url)
            .then(res => {
                setIspending(true)
                if(!res.ok) {
                    throw Error("Can not fetch data from the server")
                } 
               return res.json()
            })
            .then(data => {
                setData(data)
                setError(false)
                setIspending(false)
            })
            .catch(err => {
                setIspending(false)
                setError(true)
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch