import { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  ModalFooter,
  Button,
} from "reactstrap";

const modeloEmpleado = { //propiedades del modal
    id: "",
    dpi: "",
    nombreC: "",
    cantidadH: 0,
    salarioB: 0,
    fechaReg: "",
    usuario: "",
    password: "",
};

const ModalAemple = ({mostrarModal, setMostrarModal, gdarEmpleado, editar, setEditar, editarEmpleado}) => {

    const [empleado, setEmpleado] = useState(modeloEmpleado);
    const actualizarDato = (e) => {
        console.log(e.target.name+" : "+e.target.value);
        setEmpleado({ //concatenamos los datos que se escriben en el modal
            ...empleado,
            [e.target.name]: e.target.value,
        });
    };

    const enviarDatos = () => {
        if(empleado.id === ""){
            gdarEmpleado(empleado);
            console.log(empleado);
        }else{
           editarEmpleado(empleado);
        }

        setEmpleado(modeloEmpleado);
    };

    useEffect(() => {
        if(editar != null){
            setEmpleado(editar);
        }else{
            setEmpleado(modeloEmpleado);
        }
    }, [editar]);

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    };

  return (
    <Modal isOpen={mostrarModal}>
      <ModalHeader>
        {empleado.id === "" ? "Nuevo Empleado" : "Editar Empleado"}
        </ModalHeader>
      <ModalBody >
        <Form>
          <FormGroup>
            <Label>DPI</Label>
            <Input type="text" className="form-control" name="dpi" onChange={(e)=>actualizarDato(e)} value={empleado.dpi}/>
          </FormGroup>
          <FormGroup>
            <Label>Nombre Completo</Label>
            <Input type="text" className="form-control" name="nombreC" onChange={(e)=>actualizarDato(e)} value={empleado.nombreC} />
          </FormGroup>
          <FormGroup>
            <Label>Cantidad de Hijos</Label>
            <Input type="text" className="form-control" name="cantidadH" onChange={(e)=>actualizarDato(e)} value={empleado.cantidadH}/>
          </FormGroup>
          <FormGroup>
            <Label>Salario Base</Label>
            <Input type="text" className="form-control" name="salarioB" onChange={(e)=>actualizarDato(e)} value={empleado.salarioB}/>
          </FormGroup>
          <FormGroup>
            <Label>Usuario</Label>
            <Input type="text" className="form-control" name="usuario" onChange={(e)=>actualizarDato(e)} value={empleado.usuario}/>
          </FormGroup>
          <FormGroup>
            <Label>Contraseña</Label>
            <Input type="text" className="form-control" name="password" onChange={(e)=>actualizarDato(e)} value={empleado.password}/>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="primary" onClick={enviarDatos}>
          Guardar
        </Button>
        <Button size="sm" color="danger" onClick={cerrarModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAemple;
