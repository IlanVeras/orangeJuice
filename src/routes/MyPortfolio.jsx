import AddFirst from "../components/AddFirst/AddFirst";
import CardPerfil from "../components/CardPerfil/CardPerfil";
import NavBar from "../components/NavBar/NavBar"
import SearchBar from "../components/SearchBar/SearchBar";
import "./MyPortfolio.css"
import AppBar from "../components-mobile/NavBar/AppBar";
import { Skeleton } from "@mui/material";

function MyPortfolio() {
    return (
        <div>
            <div className="desktop-version">
                <NavBar />
                <div className="card-section">
                    <CardPerfil />
                </div>
                <div className="search-section">
                    <SearchBar />
                </div>
                <div className="project-section">
                    <AddFirst />
                    <Skeleton className="skeleton" animation={false} variant="rectangular" width={389} height={258} />
                    <Skeleton className="skeleton" animation={false} variant="rectangular" width={389} height={258} />
                    <Skeleton className="skeleton" animation={false} variant="rectangular" width={389} height={258} /> 
                </div>
            </div>
            <div className="mobile-version">
                <AppBar />
            </div>
        </div>
    );
}

export default MyPortfolio;