import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-10 items-center text-white h-16 w-full bg-red-500">
        <p>LOGO AQUI</p>
        <Link to="/admin" className="bg-green-500  rounded-md px-4 py-2">Admin</Link>
      </div>
      <div className="flex justify-center px-10 bg-amber-500">
        <div>Productos</div>
      </div>
    </>
  )
}
