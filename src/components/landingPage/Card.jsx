

export const Card = ({Productos}) => {
  const {nombre,descripcion,precio,img} = Productos
  console.log(nombre)
  return (
    <div className='flex flex-col justify-center items-center border-2 border-red-200 w-52 h-72'>
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <div className="flex justify-center">
          <img className="w-3/4" src={img} alt={descripcion} />
        </div>
        
    </div>
  )
}
