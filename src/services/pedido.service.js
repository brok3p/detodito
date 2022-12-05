import { collection, addDoc, getFirestore } from 'firebase/firestore';

const NOMBRE_COLECCION = 'pedidos';
const getCollectionFirestore = () => collection(getFirestore(), NOMBRE_COLECCION);

export const pedidoService = {
    addPedido: async(prod) => {
        // setDoc(doc(getFirestore(), NOMBRE_COLECCION, prod._id), prod)
        // addDoc(productosCol, prod).then(({ id }) => console.log('producto agregado', id));
        // return await addDoc(getCollectionFirestore, prod)
        //     .then(({ id }) => console.log('pedido agregado', id));

        const productosCol = collection(getFirestore(), 'pedidos');
        // creando un documento con el id autogenerado
        return await addDoc(productosCol, prod).then(({ id }) => console.log('producto agregado', id));
    },

}
