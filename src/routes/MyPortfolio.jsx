import CardPerfil from "../components/CardPerfil/CardPerfil";
import NavBar from "../components/NavBar/NavBar"
import SearchBar from "../components/SearchBar/SearchBar";
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