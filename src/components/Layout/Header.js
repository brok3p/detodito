import { useState } from "react";
import { useEffect } from "react";
import { categoriaService } from "../../services/categoria.service";
import NavBar from "../navbar/NavBar"

const Header = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const getCategorias = (async () => {
            await categoriaService.getCategorias()
                .then((snapshot) => {
                    setCategorias(snapshot);
                }, (error) => {
                    console.error(error);
                    setCategorias([]);
                })
        });

        getCategorias();

        return () => console.log('my effect is destroying');
    }, []);

    return (
        <header className="topnavbar-wrapper">
            <NavBar items={categorias}></NavBar>
        </header>
    )
}
export default Header;