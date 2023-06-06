import { Route, Routes } from "react-router-dom"
import { HomePage } from "../page/landingPage/HomePage"
import { AdminPage } from "../page/admin/AdminPage"
import { NewProductPage } from "../page/admin/NewProductPage"
import { SearchPage } from "../page/admin/SearchPage"
import { CategoryPage } from "../page/admin/CategoryPage"

export const AppRouter = () => {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/nuevo-producto" element={<NewProductPage/>}/>
            <Route path="/buscar-producto" element={<SearchPage/>}/>
            <Route path="/categoria" element={<CategoryPage/>}/>

        </Routes>
    </>
  )
}
