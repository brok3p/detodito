import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';

const NOMBRE_COLECCION = 'categorias';
const getCollectionFirestore = () => collection(getFirestore(), NOMBRE_COLECCION);

export const categoriaService = {
    getCategorias: async() => {
        return await getDocs(getCollectionFirestore())
            .then((snapshot) => {
                // return snapshot.docs.map((doc) => ({ ...doc.data() }));
                return snapshot.docs.map((doc) => {
                    const { _id, name } = doc.data();
                    return {id: _id, text: name, link: `/categorias/${_id}` };
                });
            });
    },
    getCategoriasByName: async (categoriaId) => {
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
    getCategoriaById: async (id) => {
        const productosCol = doc(getFirestore(), NOMBRE_COLECCION, id);
        return await getDoc(productosCol)
            .then((snapshot) => {
                if (!snapshot.exists()) {
                    return null;
                }
                return snapshot.data();
            });
    },
    cargarCategorias: async(prod) => {
        return await setDoc(doc(getFirestore(), NOMBRE_COLECCION, prod._id), prod)
            .then(({ id }) => console.log('producto agregado', id));
    },

}
