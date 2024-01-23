import "./Input.css"

// eslint-disable-next-line react/prop-types
function Input({ placeholder }) {
    return (
        <div className="container-input">
            <div className="content">
                <input type="text" placeholder={placeholder} />
            </div>
            
        </div>
    );
}

export default Input;