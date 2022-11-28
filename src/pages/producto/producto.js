import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ItemDetailContainer from "../../components/ItemDetailContainer";
import ContentWrapper from "../../components/Layout/ContentWrapper";
import Loader from "../../components/Loader/Loader";
import { productoService } from "../../services/producto.service";

const Producto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // const getProducto = async () => {
    //     try {
    //         fetch(`https://ml7e.herokuapp.com/publicationtest/${id}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 if (result.hasOwnProperty('data')) {
    //                     setProducto(result.data.publi);
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
    //         )
    //         console.log(isLoaded);
    //         console.log(producto);
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setIsLoaded(false);
    //     }
    // }

    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        const getProducto = async () => {
            await productoService.getProductoById(id)
                .then((snapshot) => {
                    setIsLoaded(true);
                    setProducto(snapshot);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
        };

        console.log('Recived productoId to:', id);
        getProducto();

        return () => console.log('my effect is destroying');
    }, [id]); // Sólo se reinscribe si id cambia

    if (error) {
        return  <ErrorMessage message={error.message}></ErrorMessage>;
    } else if (!isLoaded) {
        return <Loader></Loader>;
    } else {
        return (
            <ContentWrapper>
                <button className="btn-default" onClick={() => navigate(-1)}>
                    <i className="fa fa-arrow-left mr-1"></i>Regresar
                </button>
                <ItemDetailContainer item={producto}></ItemDetailContainer>
            </ContentWrapper>
        );
    }
}
export default Producto;