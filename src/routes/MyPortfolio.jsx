import CardPerfil from "../CardPerfil/CardPerfil";
import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar";
import "./MyPortfolio.css"

function MyPortfolio() {
    return (
        <div>
            <NavBar />
            <div className="card-section">
                <CardPerfil />
            </div>
            <div className="search-section">
                <SearchBar />
            </div>
        </div>
    );
}

export default MyPortfolio;