import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                {/* en este outlet se va a pintar toda la informacion de las secciones Nosotros y Carrito excepto el Home ya que es la ruta raiz */}
                <Outlet/>
            </div>
        </>
    )
}

export default App