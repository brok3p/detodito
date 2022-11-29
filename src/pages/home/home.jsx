import { useEffect, useState } from "react";
import ItemListContainer from "../../components/ItemListContainer"
import Loader from "../../components/Loader/Loader";
// import { collection, getDocs, getFirestore, doc, getDoc, addDoc, setDoc} from 'firebase/firestore';
// import productosMock from '../../assets/data/productos.v2.json';
import { productoService } from "../../services/producto.service";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import categoriasMock from "../../assets/data/categoriasMock";
// import { categoriaService } from "../../services/categoria.service";

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    // useEffect(() => {
    //     fetch("https://ml7e.herokuapp.com/publicationtest")
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
    //         )
    // }, []);

    useEffect(() => {
        const getProductos = async () => {
            await productoService.getProductos()
                .then((snapshot) => {
                    setIsLoaded(true);
                    //const productosList = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    console.log('called productos');
                    setItems(snapshot);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
        };

        getProductos();

        return () => console.log('my effect is destroying');
    }, []);

    
    // const sendOrder = () => {
    //     const order = {
    //         buyer: { name: "Agustin", phone: "1111", email: "a@a.com" }, items: [{ name: "Bici", price: 100 }], total: 100
    //     };
    //     const db = getFirestore();
    //     const ordersCollection = collection(db, "orders");
    //     addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    // }

    //#region Cargar datos a firestore

    // Cargar productos 
    // useEffect(() => {
    //     console.log('mock', productosMock.slice(0, 1));
    //     const cargarDatos = () => {
    //         productosMock.forEach(async(prod) => {
    //             // const productosCol = collection(db, 'productos');
    //             // creando un documento con el id autogenerado
    //             // addDoc(productosCol, prod).then(({ id }) => console.log('producto agregado', id));
    
    //             // crear un documento especificando el id
    //             await setDoc(doc(db, "productos", prod._id), prod).then(({id}) => console.log('producto agregado', id));
    //         });
    //     }

    //     // cargarDatos();

    //     return () => console.log('my effect is destroying');
    // }, []);

    // cargar categorias
    // useEffect(() => {
    //     // console.log('mock', categoriasMock.data.categories.slice(0, 1));
    //     const cargarCategorias = () => {
    //         categoriasMock.data.categories.forEach(async(prod) => {
    //             await categoriaService.cargarCategorias(prod);
    //         });
    //     }

    //     cargarCategorias();

    //     return () => console.log('my effect is destroying');
    // }, []);

    //#endregion


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
export default Home;