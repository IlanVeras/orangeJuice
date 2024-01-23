import CollectionIcon from "../CollectionIcon/CollectionIcon";
import "./AddFirst.css"

function AddFirst() {
    return (
        <div className="add-first-container">
            <CollectionIcon />
            <div className="text-container">
                <p className="text-adicione">Adicione seu primeiro projeto</p>
                <div className="text-compartilhe-container">
                    <p className="text-compartilhe">Compartilhe seu talento com milhares de pessoas</p>
                </div>
            </div>
            
        </div>
    );
}

export default AddFirst;