import { useEffect, useState } from "react";

const useLaptops = () =>{
    const [laptops, setLaptops] = useState([]);
    useEffect( () =>{
        fetch('laptopData.json')
        .then(res => res.json())
        .then(data => setLaptops(data));
    },[]);
    return [laptops, setLaptops];
}

export default useLaptops;