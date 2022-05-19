import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

const App = () => (
   
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
         <Route path="about" element={<About/>} />      
         <Route path="contact" element={<Contact/>} /> 
         <Route path="/" element={<Home/>} /> 
         <Route component={NotFound} />
         <Route path="/users/add" element={<AddUser/>} />  
         <Route path="/users/edit/:id" element={<EditUser/>} /> 
         <Route path="/users/:id" element={<User/>} />

          </Routes>
      

      </div>
    </Router>
  );


export default App;
