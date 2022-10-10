import {Table, Button } from "reactstrap";
import ModalInfo from "./ModalInfo";

const TablaUsuarios = ({data, setEditar, mostrarModal, setMostrarModal, eliminarEmpleado, mostrarModalInfo, setMostrarModalInfo, setItem}) => {
const enviarDatos = (empleado) => {
    setEditar(empleado);
    setMostrarModal(!mostrarModal);
    };
const enviarDatosInfo = (empleado) => {
    setMostrarModalInfo(!mostrarModalInfo);
    setItem(empleado);
    
    };


    return (
        <Table striped responsive>

            <thead>
                <tr>
                    <th>Dpi</th>
                    <th>Nombre</th>
                    <th>Cantidad de Hijos</th>
                    <th>Salario Base</th>
                    <th>Fecha de Registro</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Bono Decreto</th>
                    <th>Bono Parternidad</th>
                    <th>IGSS</th>
                    <th>Irtra</th>
                    <th>Salario Total</th>
                    <th>Salario Liquido</th>
                  

                    <th></th>
                </tr>

            </thead>

            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">SIN REGISTRO</td>
                        </tr>):(
                            
                            data.map((item) => (
                               
                                
                                <tr key={item.id}>
                                    <td>{item.dpi}</td>
                                    <td>{item.nombreC}</td>
                                    <td>{item.cantidadH}</td>
                                    <td>{item.salarioB}</td>
                                    <td>{item.fechaReg}</td>
                                    <td>{item.usuario}</td>
                                    <td>{item.password}</td>
                                    <td>Q{250}</td>
                                    <td>Q{item.cantidadH * 133}</td>
                                    <td>{item.salarioB * 0.0483}</td>
                                    <td>{item.salarioB * 0.01}</td>
                                    <td>Q{(item.salarioB + 250)+(item.cantidadH * 133)}</td>
                                    <td>Q{((item.salarioB + 250)+(item.cantidadH * 133))-((item.salarioB * 0.0483)+(item.salarioB * 0.01))}</td>
                                    
                                    <td>
                                        <Button size="sm" color="warning" onClick={()=>enviarDatos(item)}>
                                            Editar
                                        </Button>
                                        <Button size="sm" color="danger" onClick={()=>eliminarEmpleado(item.id)}>
                                            Eliminar
                                        </Button>
                                        <Button size="sm" color="secondary" onClick={()=>enviarDatosInfo(item)}>
                                            Info
                                        </Button>

                                    </td>

                                </tr>

                        ))
                    )
    
                }
            </tbody>
            <ModalInfo 
             mostrarModalInfo={mostrarModalInfo}
             setMostrarModalInfo={setMostrarModalInfo}
             />
            </Table>
           
        )
}

export default TablaUsuarios;