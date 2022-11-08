import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card";
import ItemDetailContainer from "../../components/ItemDetailContainer";
import ContentWrapper from "../../components/Layout/ContentWrapper";
import './producto.css'

const Producto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const getProducto = async () => {
        try {
            fetch(`https://ml7e.herokuapp.com/publicationtest/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.hasOwnProperty('data')) {
                        setProducto(result.data.publi);
                    } else {
                        setError(result);
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            console.log(isLoaded);
            console.log(producto);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoaded(false);
        }
    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        console.log('Recived productoId to:', id);
        getProducto();
    }, []);

    // return (
    //     <h1 className="container">Hola mundo</h1>
    // )

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ContentWrapper>
                {/* <ItemDetailContainer item={producto}></ItemDetailContainer> */}
                <Card item={producto}></Card>
            </ContentWrapper>
        );
    }
}
export default Producto;