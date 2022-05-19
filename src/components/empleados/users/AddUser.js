import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from "react-router-dom";


const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    identidad: "",
    name: "",
    username: "",
    email: "",  
    phone: "",
    direccion: "",
    sueldo: ""
  });

  const {identidad, name, username, email, phone, direccion, sueldo} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate("/");
  };
  return (
    <div className="container">
            <h1></h1>
      <Link className="btn btn-primary" to="/">
        Regresar
      </Link>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Registrar</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Id"
              name="identidad"
              value={identidad}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Direccion"
              name="direccion"
              value={direccion}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Sueldo"
              name="sueldo"
              value={sueldo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
