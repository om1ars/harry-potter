import axios from "axios";
import { useState } from "react";



export const MovieApi = () => {

    const [data, setData]  = useState('')
    const fetchedData = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=ad3f637b457c311591854543d75213c2').catch((err) => console.log(err))
        setData(response)
    }

    useE
    return (
        <div>
            
        </div>
    )
}
