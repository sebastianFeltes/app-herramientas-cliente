import { Link } from "react-router-dom";
import logo from "../assets/logo-cfl.png";
import StyledButton from "./StyledButton";
import { useState } from "react";

const links = [
  {
    text: "Inventario",
    path: "/inventario",
  },
  {
    text: "Historial Herramientas",
    path: "/historial-herramientas",
  },
  {
    text: "Alta Herramienta",
    path: "/alta-herramientas",
  },
  {
    text: "Lector QR",
    path: "/lector-qr",
  },
];

function Navbar() {
  const nombreUs = localStorage.getItem("nombreUsuario").split("")[0];
  const apellidoUs = localStorage.getItem("apellidoUsuario").split("")[0];
  console.log(nombreUs, apellidoUs);

  return (
    <div>
      <div className="navbar bg-blue-700">
        <div className="flex-1">
          <Link to={"/home"} className="w-16">
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="btn min-w-56 bg-blue-700  border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white "
                  to={link.path}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            {/*  <li>
              <Link to={"/inventario"}>
                <button className="btn min-w-56 bg-blue-700  border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white">
                  Inventario
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/historial-herramientas"}>
                <button className="btn min-w-56 bg-blue-700  border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white">
                  Historial
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/alta-herramientas"}>
                <button className="btn min-w-56 bg-blue-700  border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white">
                  Alta Herramienta
                </button>
              </Link>
            </li>
            <li>
              <Link
                className="btn min-w-56 bg-blue-700  border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white"
                to={"/lector-qr"}
              >
                Lector Qr
              </Link>
            </li> */}
            <div className="dropdown dropdown-end  flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-white"
              >
                {nombreUs}
                {apellidoUs}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-blue-700 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

/* 
Tamaño mas chico de botones
Hover dentro del boton
Daisy Navbar Ul 
*/
