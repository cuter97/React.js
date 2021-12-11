import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="text-center p-5">
            <h1>
                ERROR 404 
            </h1>
            <div>
                <Link to="/" className="btn btn-outline-primary">HOME</Link>    
            </div>

        </div>
    )
}

export default Error
