import { useState } from "react"


export const useGptSearch = () => {

    const [loading, setloading] = useState(false);

    setloading(false);

    // setInterval(() => {
    //     setloading(true);
    // }, 2000);

    return loading;

    
}