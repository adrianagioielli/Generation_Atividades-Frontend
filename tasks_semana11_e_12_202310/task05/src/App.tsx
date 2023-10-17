import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


interface User {
  id: number;
  name: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;