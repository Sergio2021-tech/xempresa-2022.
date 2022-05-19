import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
         
        </div>
    </div>
  );
};

export default Home;




/* <table class="table border shadow">

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
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>Mostrar </Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Editar  </Link>
                  <navLink class="btn btn-dark" onClick={() => deleteUser(user.id)}> Eliminar</navLink>
                </td>
              </tr>
            )
              )
                }
             
             </tbody>
          </table>  */
