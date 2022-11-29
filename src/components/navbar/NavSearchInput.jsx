const NavSearchInput = () => {
    return (
        <div className="mr-auto">
            <form className="d-flex">
                {/* <input type="text" className="nav-search-input" placeholder="Buscar productos, marcas y más" /> */}
                <div className="search">
                    <input type="text" className="search-input" placeholder="Buscar..." />
                    <div className="search-icon">
                        <i className="fas fa-search" name="search"></i>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default NavSearchInput;