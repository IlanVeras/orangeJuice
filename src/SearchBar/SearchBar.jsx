import "./SearchBar.css"
import Input from "../Input/Input"

function SearchBar() {
    return (
        <div className="container-search-bar">
            <h3>Meus Projetos</h3>
            <Input placeholder="Buscar tags"/>
        </div>
    );
}

export default SearchBar;