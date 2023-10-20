import React from 'react'

export const Tarea = ({tarea, deletTarea}) => {

  const {titulo, descripcion, id} = tarea;

  return (
    <div className=" bg-white rounded-lg shadow-lg my-10 ml-5 py-10 ">
         <h2> { titulo } </h2>
         <p className="font-normal py-10 mx-5">
            { descripcion }
         </p>

         <input 
            className="cursor-pointer rounded-sm bg-green-600 text-white uppercase py-2 px-20"
            value={'Tarea realizada'}
            type="submit" 
            onClick={ () => deletTarea(id)}
            />
    </div>
  )
}
