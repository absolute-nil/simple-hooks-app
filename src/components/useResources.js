import {useState,useEffect} from "react"
import axios from "axios"

export default (resource) => {
    const [response,setResponse] = useState([]);

    useEffect(
        () =>{
            (async resource =>{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

                setResponse(response.data)
            })(resource)
        },[resource]
    )

    return response;
}