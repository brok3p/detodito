import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const NOMBRE_COLECCION = 'usuarios';
const getCollectionFirestore = () => collection(getFirestore(), NOMBRE_COLECCION);

export const usuarioService = {
    login: async (email, password) => {
        // const q1 = query(citiesRef, where("state", "==", "CO"), where("name", "==", "Denver"));
        const q = query(getCollectionFirestore(), where("email", "==", email), where("password", "==", password));

        return await getDocs(q)
            .then((snapshot) => {
                // const data = snapshot.docs[0].data();
                return snapshot.docs.map((doc) => ({ ...doc.data() }))[0];
            });
    }
}
