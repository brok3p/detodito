import { useEffect, useState } from "react";
import ItemListContainer from "../../components/ItemListContainer"
import Loader from "../../components/Loader/Loader";
import { collection, getDocs, getFirestore, doc, getDoc, addDoc, setDoc} from 'firebase/firestore';
import productosMock from '../../assets/data/productos.v2.json'

const Home = () => {
    const db = getFirestore();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    //how get documents of firebase with fetch in react?
    // Query to fetch documents where slug field is equal to given SLUG 
    // const q = query(collection(db, c), where("slug", "==", SLUG))
    
    // onSnapshot(q, snap => {
        //     if (!snap.empty) {
            //         const data = snap.docs[0].data()
            //         // snap.docs would be an array with 1 document
            //         // There could be multiple in case multiple posts have same slug by chance  
            //         console.log(data)
    //     } else {
    //         console.log("No documents found with given slug")
    //     }
    // })

    useEffect(() => {
        const getProductos= async() => {
            const productosCol = collection(db, 'productos');
            // const productoSnapshot = await getDocs(productosCol);
            // const productosList = productoSnapshot.docs.map((doc) => doc.data());
            await getDocs(productosCol).then((snapshot) => {
                // if(snapshot.exists()) {
                    const productosList = snapshot.docs.map((doc) => ({...doc.data()}));
                    setItems(productosList);
                    console.log(productosList);
                // }
            })
    
            // console.log(productosList);
            // return productosList;
        };

        // setItems(...getProductos());
        getProductos();
        setIsLoaded(true);

        return () => console.log('my effect is destroying');
    }, [])
    
    /*useEffect(() => {
        const getProducto= async() => {
            const productosCol = doc(db, 'productos', '8YhGGt6y03SbA8IkCp0M');
            // const productoSnapshot = await getDocs(productosCol);
            // const productosList = productoSnapshot.docs.map((doc) => doc.data());
            await getDoc(productosCol).then((snapshot) => {
                // if(snapshot.exists()) {
                    console.log(snapshot.id, snapshot.data());
                // }
            })
    
            // console.log(productosList);
            // return productosList;
        };

        // setItems(...getProductos());
        getProducto();
        setIsLoaded(true);
    }, [])
    */



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
    // }, [])

    
    // const sendOrder = () => {
    //     const order = {
    //         buyer: { name: "Agustin", phone: "1111", email: "a@a.com" }, items: [{ name: "Bici", price: 100 }], total: 100
    //     };
    //     const db = getFirestore();
    //     const ordersCollection = collection(db, "orders");
    //     addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    // }

    // Cargar los datos a firestore
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
    // }, [])


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
export default Home;