
import { useEffect, useState } from 'react';
import useLaptops from '../../hooks/useLaptops';
import LaptopCart from '../LaptopCart/LaptopCart';
import './Laptops.css'

const Laptops = () => {
    // const [laptops, setLaptops] = useLaptops();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect( ()=>{
        console.log('check to understand useffect');
        fetch('laptopData.json')
        .then(res => res.json())
        .then( data =>{
            const match = data.filter(d => d.model.includes(searchText));
            setSearchResult(match);
        });


    }, [searchText])

    const searchLaptop = event =>{
        setSearchText(event.target.value);
        
    }
    // const searchLaptop = event =>{
    //     const searchText = event.target.value;
    //     const match = laptops.filter(l => l.model.includes(searchText));
    //     setSearchResult(match);
    // }
    return (
        <div>
            <h4>Laptops components......{searchResult.length}</h4>
            <div className="search-field">
                <input onChange={searchLaptop} type="text" placeholder='Search' />
            </div>
            <div className="laptop-cart-container">
                {
                    searchResult.map(laptop => <LaptopCart
                        key={laptop.id}
                        laptop = {laptop}
                    ></LaptopCart>)
                }
        </div>
        </div>
        
    );
};

export default Laptops;