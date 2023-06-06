import { collection, doc, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"



export const loadProducts = async() => {
    const collectionProduct = collection(FirebaseDB,'/Productos')
    const docs = await getDocs(collectionProduct)
    const products = []
    docs.forEach((doc)=>{
        products.push({id:doc.id, ...doc.data()})
    })
    return products
}