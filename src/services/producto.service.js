import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

// const db = getFirestore();
const NOMBRE_COLECCION = 'productos';
const getCollectionFirestore = () => collection(getFirestore(), NOMBRE_COLECCION);

export const productoService = {
    getProductos: async() => {
        // const productosCol = collection(getFirestore(), NOMBRE_COLECCION);
        return await getDocs(getCollectionFirestore())
            .then((snapshot) => {
                return snapshot.docs.map((doc) => ({ ...doc.data() }));
            });
    },
    getProductosAlt: async() => {
        // obtner los productos ejemplo firebase
        // const db = getFirestore();
        const productosCol = collection(getFirestore(), NOMBRE_COLECCION);
        // const productoSnapshot = await getDocs(productosCol);
        // const productosList = productoSnapshot.docs.map((doc) => doc.data());

        // obtener los productos con async
        // await getDocs(productosCol).then((snapshot) => {
        //     // if(snapshot.exists()) {
        //         const productosList = snapshot.docs.map((doc) => ({...doc.data()}));
        //         setItems(productosList);
        //         console.log(productosList);
        //     // }
        // })

        return await getDocs(productosCol);
    },
    getProductosByCategoriaId: async (categoriaId) => {
        // Query to fetch documents where slug field is equal to given SLUG 
        const q = query(getCollectionFirestore(), where("category", "==", categoriaId));

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

        return await getDocs(q)
            .then((snapshot) => {
                return snapshot.docs.map((doc) => ({ ...doc.data() }));
            });
    },
    getProductoById: async (id) => {
        const productosCol = doc(getFirestore(), NOMBRE_COLECCION, id);
        // obtner un prioducto segun el ejemplo
        return await getDoc(productosCol)
            .then((snapshot) => {
                if (!snapshot.exists()) {
                    return null;
                }
                return snapshot.data();
            });
    }

}
