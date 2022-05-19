import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    direccion: "",
    sueldo: ""

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Regresar
      </Link>
      <h1 className="display-4">Numero de Listado: {id}</h1>
      <hr />
      <ul className="list-group w-50">
       <li className="list-group-item">Identidad: {user.identidad}</li>
        <li className="list-group-item">Nombre: {user.name}</li>
        <li className="list-group-item">Nombre de Usuario: {user.username}</li>
        <li className="list-group-item">Correo Electronico: {user.email}</li>
        <li className="list-group-item">Numero De Telefono: {user.phone}</li>
        <li className="list-group-item">Direccion: {user.direccion}</li>
        <li className="list-group-item">Sueldo: {user.sueldo}</li>
      </ul>
    </div>
  );
};

export default User;
