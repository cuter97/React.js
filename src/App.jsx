import { Outlet } from "react-router-dom"
import { CartContextCard } from "./components/CartContextCard"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <CartContextCard>
                <NavBar/>
                <div>
                    {/* en este outlet se va a pintar toda la informacion de las secciones Nosotros y Carrito excepto el Home ya que es la ruta raiz */}
                    <Outlet/>
                </div>
                <Footer/>
        </CartContextCard>
    )
}

export default App