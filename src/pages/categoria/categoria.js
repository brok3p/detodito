import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ItemListContainer from "../../components/ItemListContainer";
import Loader from "../../components/Loader/Loader";
import { productoService } from "../../services/producto.service";

const Categoria = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        //     fetch(`https://ml7e.herokuapp.com/publicationtest?category=${id}`)
        //         .then(res => res.json())
        //         .then(
        //             (result) => {
        //                 setIsLoaded(true);
        //                 if (result.hasOwnProperty('data')) {
        //                     setItems(result.data.publications);
        //                 } else {
        //                     setError(result);
        //                 }
        //             },
        //             // Note: it's important to handle errors here
        //             // instead of a catch() block so that we don't swallow
        //             // exceptions from actual bugs in components.
        //             (error) => {
        //                 setIsLoaded(true);
        //                 setError(error);
        //             }
        //         );

        const getProductos = async () => {
            await productoService.getProductosByCategoriaId(id)
                .then((snapshot) => {
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
export default Categoria;