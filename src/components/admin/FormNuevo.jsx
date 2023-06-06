import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starNewProducts, startUploadingFiles } from "../../store/slice/productos/thunks"

export const FormNuevo = () => {
const dispatch = useDispatch()
const {isSaving,imagen}=useSelector(state=>state.productos)


  const producto = {
    nombre:'',
    descripcion:'',
    precio:'',
    img:''

  }
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')

  producto.nombre = nombre;
  producto.descripcion=descripcion;
  producto.precio = precio;
  producto.img = imagen



  const handleClick = async (e) => {
    e.preventDefault()
    // setImg( startUploadingFiles(img))
    dispatch(starNewProducts(producto));
    // console.log(producto)
  }
  
  const onFileInputChange = async ({target}) => {
    if( target.files === 0) return
    // setImg(target.files)
    // console.log(target.files)
    // console.log('subiendo archivo')
    // console.log( await img) 
    
    dispatch(startUploadingFiles(target.files))
  }


  return (
    <form onSubmit={handleClick}>
      <label>Ingrese el nombre</label>
      <input className="border-2 ml-10" type="text" onChange={(e)=>setNombre(e.target.value)}/>
      <br />
      <label>Ingrese el precio</label>
      <input className="border-2 ml-10" type="text" onChange={(e)=>setPrecio(e.target.value)}/>
      <br />
      <label>Ingrese la descripción</label>
      <input className="border-2 ml-10" type="text" onChange={(e)=>setDescripcion(e.target.value)}/>
      <br />
      <label>Ingrese su imagen</label>
      <input className="border-2 ml-10" type="file" onChange={onFileInputChange} />
      <br />
      <button 
        disabled={isSaving}
        type="submit" className="border-2 bg-green-300 p-2 rounded-lg" onChange={onFileInputChange}>Enviar</button>
    </form>


  )
}
