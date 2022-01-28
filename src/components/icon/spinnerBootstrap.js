import { Spinner } from "react-bootstrap";
    const SpinnerBs = () =>{
        return(
    <Spinner animation="border" role="status"  variant="danger">
    <span className="visually-hidden">Cargando...</span>
</Spinner>
)
}

export default SpinnerBs