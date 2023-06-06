import { addDoc, collection, doc } from "firebase/firestore"
import { FirebaseDB } from "../../../firebase/config"
import { loadingProduct, saveData, savingProduct, upLoadImg } from "./productosSlice"
import { loadProducts } from "../../../helpers/loadProducts"
import { fileUpload } from "../../../helpers/fileUpload"

export const starNewProducts = (producto)=> {
    return async (dispatch,getState) => {
        dispatch(savingProduct())
        console.log(producto)
        const newProduct = producto
        // const productosCollection = doc (collection(FirebaseDB, "Productos"));
        const productosCollection= collection(FirebaseDB,"Productos")
        const setDocResp = await addDoc(productosCollection,newProduct)
        // const setDocResp = await setDoc(newDoc,newProduct)
        // const newDoc = await addDoc(productosCollection, newProduct);
        // const newDoc = addDoc(collection(FirebaseDB,`Productos`))
        dispatch(saveData(newProduct))

    }
}

export const starLoadingProducts = () => {
    return  async(dispatch,getState) =>{
        const products = await loadProducts()
        dispatch(loadingProduct(products))
    }
}


export const startUploadingFiles=( files=[]) => {
    return async (dispath) => {
       const result = await fileUpload(files[0])
       console.log(result)
       dispath(upLoadImg(result))

    //    const fileUploadPromises = [];
    //    for (const file of files) {
    //        fileUploadPromises.push(fileUpload(file))
    //    }
    //    const photosUrls = await Promise.all(fileUploadPromises);
    //    console.log(photosUrls)
        


    }
}