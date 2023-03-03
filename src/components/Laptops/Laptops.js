
import useLaptops from '../../hooks/useLaptops';
import LaptopCart from '../LaptopCart/LaptopCart';
import './Laptops.css'

const Laptops = () => {
    const [laptops, setLaptops] = useLaptops();
    const searchLaptop = event =>{
        console.log(event.target.value)
    }
    return (
        <div>
            <h4>Laptops components......{laptops.length}</h4>
            <div className="search-field">
                <input onChange={searchLaptop} type="text" placeholder='Search' />
            </div>
            <div className="laptop-cart-container">
                {
                    laptops.map(laptop => <LaptopCart
                        key={laptop.id}
                        laptop = {laptop}
                    ></LaptopCart>)
                }
        </div>
        </div>
        
    );
};

export default Laptops;