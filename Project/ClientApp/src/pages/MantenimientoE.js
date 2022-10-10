import React from 'react'
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import ModalAemple from '../Componentes/ModalAemple';

import TablaUsuarios from "../Componentes/TablaUsuarios";

export default function MantenimientoE() { 
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalInfo, setMostrarModalInfo] = useState(false);
  const [editar, setEditar] = useState(null);
  const [item, setItem] = useState(null);

    const mostrarUsuarios = async () => {
      const response = await fetch("api/contacto/GetAllEmpleado");
      if (response.ok) {
        const data = await response.json();
        setUsuarios(data);
        console.log(data);
      } else {
        console.log("Error al obtener los usuarios");
      }
    };
  
    useEffect(() => {
      mostrarUsuarios();
    }, []);

    const guardarEmpleado = async (empleado) => {
      console.log("esto envia",empleado);
      const response = await fetch("api/contacto/CrearEmpleado", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dpi: empleado.dpi,
          nombreC: empleado.nombreC,
          cantidadH: empleado.cantidadH,
          salarioB: empleado.salarioB,
          usuario: empleado.usuario,
          password: empleado.password,
        }),
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        setMostrarModal(!mostrarModal);
        mostrarUsuarios();
    };

    const editarEmpleado = async (empleado) => {
      console.log("esto envia",empleado);
      const response = await fetch("api/contacto/EditarEmpleado", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dpi: empleado.dpi,
          nombreC: empleado.nombreC,
          cantidadH: empleado.cantidadH,
          salarioB: empleado.salarioB,
          usuario: empleado.usuario,
          password: empleado.password,
        }),
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        setMostrarModal(!mostrarModal);
        mostrarUsuarios();
    };

    const eliminarEmpleado = async (id) => {

      var respuesta = window.confirm("¿Está seguro de eliminar el empleado?");
      if (!respuesta) {
        return;

      }
      console.log("esto envia",id);
      const response = await fetch("api/contacto/EliminarEmpleado/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        mostrarUsuarios();
    };



    return (
      <Container>
        <Row className="mt-5">
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Lista de Usuarios</h5>
              </CardHeader>
              <CardBody>
                <Button size="sm" color="success" onClick={()=> setMostrarModal(!mostrarModal)}>
                  Nuevo Usuario
                </Button>
                <hr></hr>
              <TablaUsuarios data={usuarios} 
               setEditar={setEditar}
                mostrarModal={mostrarModal} 
                setMostrarModal={setMostrarModal} 
                eliminarEmpleado={eliminarEmpleado}
                mostrarModalInfo={mostrarModalInfo}
                setMostrarModalInfo={setMostrarModalInfo}
                setItem={setItem}

                 />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalAemple
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          gdarEmpleado={guardarEmpleado}
          editar={editar}
          setEditar={setEditar}
          editarEmpleado={editarEmpleado}
        />
       
      </Container>
    );
  };
