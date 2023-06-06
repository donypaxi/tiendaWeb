import { Link } from "react-router-dom"

export const NavbarAdmin = () => {
  return (
    <>
      <div className="flex justify-between px-10 items-center text-white h-16 w-full bg-red-500 ">
        <p>LOGO AQUI</p>
        <Link to="/" className="bg-red-600  rounded-md px-6 py-2">Salir</Link>
      </div>
      <div className="flex justify-between text-white font-bold px-10 py-1 bg-amber-500">
        <Link to="/nuevo-producto" >Nuevo Producto</Link>
        <Link to="/buscar-producto">Buscar productos</Link>
        <Link to="/categoria">categorías</Link>
      </div>
    </>
  )
}
