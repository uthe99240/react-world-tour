import './Country.css'


const Country = ({ country, handleVisited, isVisited }) => {
    const { name, flags } = country || {};

    return (
        <div className="country-card">
            <p>{name?.common || "Unknown Country"}</p> {/* Optional chaining with fallback */}
            <img src={flags?.png} alt="" /> <br />
            <button onClick={() => handleVisited(country)}>
                {isVisited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;
