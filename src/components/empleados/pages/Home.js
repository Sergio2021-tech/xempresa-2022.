import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { } from "../users/Habuser";

const Home = () => {
  const [users, setUser] = useState([]);
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();

    
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1></h1>
          <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Nombre de Usuario</th>
              <th scope="col">Corre Electronico</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>Ver </Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Editar  </Link>
                  <navLink class="btn btn-dark" onClick={() => deleteUser(user.id)}> Eliminar</navLink>
                  <navLink class="btn btn-outline-primary mr-2" onClick={() => (user.id)}> Habilitar</navLink>
                  <navLink class="btn btn-dark" onClick={() => (user.id)}> Desabilitar</navLink>

                </td>
              </tr>
            )
              )
                }
             
             </tbody>
          </table> 
        </div>
    </div>
  );
};

export default Home;




/*<Link  </Link> */
