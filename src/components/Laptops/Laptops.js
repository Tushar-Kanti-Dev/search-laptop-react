
import { useState } from 'react';
import useLaptops from '../../hooks/useLaptops';
import LaptopCart from '../LaptopCart/LaptopCart';
import './Laptops.css'

const Laptops = () => {
    const [laptops, setLaptops] = useLaptops();
    const [searchResult, setSearchResult] = useState([]);
    const searchLaptop = event =>{
        const searchText = event.target.value;
        const match = laptops.filter(l => l.model.includes(searchText));
        setSearchResult(match);
    }
    return (
        <div>
            <h4>Laptops components......{laptops.length}</h4>
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