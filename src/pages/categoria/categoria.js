import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer";
import Loader from "../../components/Loader/Loader";

const Categoria = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(`https://ml7e.herokuapp.com/publicationtest?category=${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.hasOwnProperty('data')) {
                        setItems(result.data.publications);
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
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loader></Loader>;
    } else {
        return (
            <ItemListContainer items={items}></ItemListContainer>
        );
    }
}
export default Categoria;