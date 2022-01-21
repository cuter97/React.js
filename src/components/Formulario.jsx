import { useContext, useState } from "react"
import { CartContext } from "./CartContextCart"
import db from "../firebase/firebase"
import { addDoc, collection } from "firebase/firestore"

// hook de formulario
import { useForm } from 'react-hook-form'
import OrdenFormulario from "./OrdenFormulario";

const Formulario = () => {

    const {cart, precioTotal, clear} = useContext(CartContext)

    const [buyer, setBuyer] = useState({})
    const [orderId, setOrderId] = useState('')

    const { register, handleSubmit, formState: { errors }} = useForm();

    const handleInputName = (e) => {
        setBuyer({ ...buyer, name: e.target.value })
    }
    const handleInputPhoneNumber = (e) => {
        setBuyer({ ...buyer, phone: e.target.value })
    }
    const handleInputEmail = (e) => {
        setBuyer({ ...buyer, email: e.target.value })
    }

    const handler = async () => {

        // lo seteo en 1 para despues poder poner una imagen de cargando mientras se ejecuta el proceso
        setOrderId(1)
        const orden = {
            buyer: {...buyer},
            price: precioTotal(),
            cart: {
                ...cart.map((aux) => {
                    return {
                        id: aux.id,
                        cantidad: aux.cantidad,
                        producto: aux.producto,
                    }
                })
            }
        }

        const {id} = await addDoc(collection(db, "ordenes-compra"), orden)

        // guardo el id de la compra en un state
        setOrderId(id)
        
        clear()

    }

    return  orderId !== '' ? (
            <OrdenFormulario id={orderId}></OrdenFormulario>
        ):(
            <div className="p-4">
                <h4 className="my-5 text-center"><span>Formulario de compra simulada</span></h4>
                <form className="container"
                    style={{ width:900 }}
                    onSubmit={handleSubmit(handler)}  
                        >

                        <div className="row p-2">
                            <label htmlFor="name" className="p-1">
                                Nombre completo
                            </label>
                            <input type="text"
                                    {...register("exampleRequired", { required: true })}
                                    className="p-1"
                                    placeholder="Text"
                                    onChange={handleInputName}
                            />
                            <br />
                                {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                        </div>

                        <div className="row p-2">
                            <label htmlFor="email" className="p-1">
                                Email
                            </label>
                        <input 
                                id="email"
                                {...register("email", {
                                    required: "required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                })}
                                type="email"
                                
                                onChange={handleInputEmail}
                                className="p-1"
                                placeholder="Mail"
                         />
                         <br>
                            {errors.email && <span role="alert">{errors.email.message}</span>}
                         </br>
                    </div>

                    <div className="row p-2">
                        <label htmlFor="phone-number" className="p-1">
                            Número de teléfono
                        </label>
                        <input
                            type="tel"
                            {...register("tel", {required: true, minLength: 6, maxLength: 12})}
                            className="p-1"
                            placeholder="Tel"
                            onChange={handleInputPhoneNumber}
                        />
                        <br />
                            {errors.tel && <span>This field requires between 6 and 12 numbers</span>}
                        <br />
                    </div>

                    <div className="text-center my-5">
                        <button className="btn btn-primary" type="submit">Comprar</button>  
                    </div>
                </form>
                
            </div>
        )

       
    
}

export default Formulario
