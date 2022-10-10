//modal que se muestra al dar click en el boton de informacion
//por falta de tiempo no se pudo implemntar los valores en este modal :(
    //mi plan era poner los valores de los calculos en este modal y no dejarlos en la tabla
import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

export default function ModalInfo({ mostrarModalInfo, setMostrarModalInfo}) {
    
    const cerrarModal = () => {
        setMostrarModalInfo(!mostrarModalInfo);
    };
    
    

    return (
        <Modal isOpen={mostrarModalInfo}>
            <ModalHeader>
                <div>
                    <h3>Informacion del empleado</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <h5>DPI: </h5>
                <h5>Nombre Completo: </h5>
                <h5>Cantidad de Hijos: </h5>
                <h5>Salario Base:</h5>
                <h5>Bono Decreto: 250.00</h5>
                <h5>Bono Parternidad: </h5>
                <h5>Igss: </h5>
                <h5>IRTRA:</h5>
                <h5>Salario Total: </h5>
                <h5>Salario Liquido: </h5>
                
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => cerrarModal()}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}
