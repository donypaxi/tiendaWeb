
import { useEffect } from "react"
import { Card } from "../../components/landingPage"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingProducts } from "../../store/slice/productos/thunks"
export const GalleryLayout = () => {
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(starLoadingProducts())
  }, [])
  

  const {productos} = useSelector((state)=>state.productos)
  console.log(productos, 'galery')
  return (
    
    <div className="flex flex-wrap gap-5 p-10">
        {productos.map((productos) => ( 
            <Card key={productos.id} Productos={productos}/>
            ))}
    </div>
  )
}
