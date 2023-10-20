import React from "react";
import { Tarea } from "./Tarea";

export const ListaDeTareas = ({tareas, deletTarea}) => {

  return (
    <div className=" text-center font-bold md:w-2/4 md:h-screen overflow-y-scroll">

      <h2 className="text-4xl ">Tus tareas del dia son:</h2>
      <p className="text-lg ">
        Tus tareas {""}
        <span className="text-red-500">se mostraran aqui</span>
      </p>

      <div>
        { tareas.map( tarea => 
          <Tarea 
            key={tarea.id}
            tarea={tarea}
            deletTarea={deletTarea}
          /> )}
      </div>
    </div>
  );
};
