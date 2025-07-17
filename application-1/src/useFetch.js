import { useState, useEffect } from "react";
const useFetch = (url) => {
    const[data,setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[fetchError, setFetchError] = useState(null);

    useEffect(() => {
            fetch(url)
            .then((response)=>{
                if(!response.ok){
                    console.log(response)
                    throw Error('There was issue, while fetching data ! ! !');
                }
                return response.json();
            })
            .then(data=>{
                setFetchError(null);
                setData(data);
                setIsPending(false);
             })
             .catch(err => {
                setFetchError(err.message);
                setIsPending(false);
             })
            },[url]);
    
    return {data, isPending, fetchError};
}
 
export default useFetch;