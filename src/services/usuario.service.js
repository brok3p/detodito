import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';

const NOMBRE_COLECCION = 'usuarios';
const getCollectionFirestore = () => collection(getFirestore(), NOMBRE_COLECCION);

export const usuarioService = {
    login: async (email, password) => {
        // const q1 = query(citiesRef, where("state", "==", "CO"), where("name", "==", "Denver"));
        const q = query(getCollectionFirestore(), where("email", "==", email), where("password", "==", password));

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
                // const data = snapshot.docs[0].data();
                return snapshot.docs.map((doc) => ({ ...doc.data() }))[0];
            });
    }
}
