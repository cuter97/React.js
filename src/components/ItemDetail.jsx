const ItemDetail = ({information}) => {

    const {info, imagen} = information

    return (
        <>
            <h5 className="text-center fs-3" >Informacion del produto</h5>
            <div className="d-flex justify-content-center completo" >
                <div className="col-md-4 mb-2 " >
                    <div className="card">
                        <img className="card-img-top" src={imagen} alt="producto"/>
                        <h5 className="card-header text-center" > {info} </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
