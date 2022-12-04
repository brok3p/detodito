import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ItemListContainer from "../../components/ItemListContainer";
import Loader from "../../components/Loader/Loader";
import { productoService } from "../../services/producto.service";

const Buscar = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getProductos = async () => {
            await productoService.getProductosByNombre(id)
                .then((snapshot) => {
                    console.log('busqueda', snapshot);
                    setIsLoaded(true);
                    setItems(snapshot);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
        };

        getProductos();

        return () => console.log('my effect is destroying');
    }, [id]);

    if (error) {
        return  <ErrorMessage message={error.message}></ErrorMessage>;
    } else if (!isLoaded) {
        return <Loader></Loader>;
    } else {
        return (
            <ItemListContainer items={items}></ItemListContainer>
        );
    }
}
export default Buscar;