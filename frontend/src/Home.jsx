import React from "react";
import { Link } from "react-router-dom"; // Agrega esta importación
import reactLogo from './assets/react.svg';
//fix
export function Home() {
  return (
    <>
      <div>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Outlet Zona Deportiva</h1>
        <h3>Depósito</h3>
      </div>
      <div className="espacio-bajo-encabezado">
        <ul className="facebook-list">
          {/* <li><Link to="/">home</Link></li> */}
          <li><Link to="/login">Ingresar</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </div>
    </>
  );
}