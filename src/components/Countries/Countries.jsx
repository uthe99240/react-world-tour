import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Visit from "../Visit/Visit";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visited, setVisited] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    useEffect(() => {
        if(countries.length ){
            const storedcart = getStoredCart();
            const savedCart = [];

            for(const name of storedcart){
                const country = countries.find(country => country.name.common === name)
                if(country){
                    savedCart.push(country);
                }    
            }

            setVisited(savedCart);
            
        }
        
    },[countries])

    const handleVisited = (country) => {
        const newset = [...visited, country.name.common];
        setVisited(newset);
        addToLS(country.name.common);
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <h3>Visited Countries : {visited.length}</h3>
            <Visit visited = {visited}></Visit>
            <div className="country-container">
                {
                    countries.map(country => {
                        const isVisited = visited.includes(country.name.common);
                        return (
                            <Country
                                key={country?.name.common}
                                country={country}
                                handleVisited={handleVisited}
                                isVisited={isVisited}
                            />
                        );
                    })
                }
            </div>

        </div>
    );
};

export default Countries;