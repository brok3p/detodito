import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

// const db = getFirestore();
const NOMBRE_COLECCION = 'productos';

export const productoService = {
    getProductos: async() => {
        const productosCol = collection(getFirestore(), NOMBRE_COLECCION);
        return await getDocs(productosCol)
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
    getProductoById: async(id) => {
        const db = getFirestore();
        const productosCol = doc(db, NOMBRE_COLECCION, id);
        // obtner un prioducto segun el ejemplo
        // await getDoc(productosCol).then((snapshot) => {
        //     // if(snapshot.exists()) {
        //         console.log(snapshot.id, snapshot.data());
        //     // }
        // })

        return await getDoc(productosCol);
    }

}
