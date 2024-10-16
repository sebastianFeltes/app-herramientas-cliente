import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StyledInput from "../components/StyledInput";
import { getHistorialHerramientas } from "../services/historial-herramientas.service";
    
    function HistorialHerramientas() {
       const [herramientas , setHerramientas] = useState([]);
       async function obtenerHerramientas () {
          const res =await getHistorialHerramientas();
        console.log(res);
        
          setHerramientas(res)  
       } 

       useEffect(()=>{
        obtenerHerramientas()
       } ,[])
       
      return (
        <> <Navbar/>
        <div className="bg-white min-h-screen flex flex-col items-center ">
            <div className=" filtros-container gap-9 mb-3 flex w-25 ">
                <StyledInput textColor={"text-black"} type={"text"} placeholder={"filtrar por usuario"} />
                <StyledInput textColor={"text-black"} type={"text"} placeholder={"filtrar por herramienta"} />
                <StyledInput textColor={"text-black"} type={"text"} placeholder={"filtrar por fecha"} />
            </div>
            {/* Paginación  */}
            <div role="tablist" className="tabs tabs-boxed bg-gray-700 text-black">
              <a role="tab" className="tab">Tab 1</a>
              <a role="tab" className="tab tab-active">Tab 2</a>
              <a role="tab" className="tab">Tab 3</a>
            </div>
            {/* Contenedor de la tabla */}
            <div className="flex-grow justify-center w-full mb-10 mt-4">
              <table className="table text-black w-full ">
                {/* cabecera */}
                <thead className="text-gray-700 bg-gray-300 ">
                  <tr >
                    <th ></th>
                    <th >Usuario</th>
                    <th >Herramienta</th>
                    <th>movimiento</th>
                    <th >Fecha</th>
                    <th>Hora</th>
                    <th >Estado de herramienta</th>
                  </tr>
                </thead>
                <tbody>
                 {herramientas.map((herramienta, index)=>(<tr key={index}>
                  <td>{herramienta.id_herramienta}</td>
                  <td>{herramienta.nombre_alumno} {herramienta.apellido_alumno}</td>
                  <td>{herramienta.nombre_herramienta} </td>
                  <td>{herramienta.movimiento} </td>
                  <td>{herramienta.fecha} </td>
                  <td>{herramienta.hora} </td>
                  <td>{herramienta.estado} </td>
                 </tr>))}
                </tbody>
              </table>
              </div>
        
        </div>
        </>
        );
      }
  
export default HistorialHerramientas