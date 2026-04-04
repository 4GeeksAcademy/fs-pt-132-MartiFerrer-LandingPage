const Card = (props) => {

    return (

        <div className="col-sm-5 col-md-3">
            <div className="card h-100">
                <div className="ratio ratio-1x1">

                    <img src={props.imagen}
                        className="card-img-top object-fit-cover w-100" alt="..." />
                </div>

                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href={props.enlace} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card