import { useState } from "react";

const NavSearchInput = ({submit}) => {
    const filter = useFormInput('');

    const handleSubmit = async(event) => {
        console.log('nav', filter.value);
        event.preventDefault();
        submit(filter.value);
    }


    return (
        <div className="mr-auto">
            <form className="d-flex" onSubmit={handleSubmit}>
                {/* <input type="text" className="nav-search-input" placeholder="Buscar productos, marcas y más" /> */}
                <div className="search">
                    <input type="text" className="search-input" placeholder="Buscar..." {...filter} />
                    <div className="search-icon">
                        <i className="fas fa-search" name="search"></i>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default NavSearchInput;

const useFormInput = (initialValue) => {
    const[value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}