import { useState } from "react";
import { Error } from "./Error";



export const Formulario = ({ setTareas }) => {

    // Donde se guardaran los valores del formulario
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('')
    
    const [error, setError] = useState(false)

    
    const handleAdd = (e) =>{
        // Previene la accion por default
        e.preventDefault();
        
        // Los datos los podemos guardar en un objeto para pasarlo al App
        const objetoTarea = {
            titulo,
            descripcion,
            id: generarId()
        }

        // Al momento de hacer Click quiero que realize una validacion
        // creamos un arreglo donde pregunta si el arreglo incluye ('')
        if( [titulo, descripcion].includes('') ){
            console.log('No existe valores en los input')
            setError(true)
            // Si llega aqui que se detenga
            return

        }else{
            console.log('Tiene valores')
            setError(false)
        }
                
        setTareas((e) => ([...e, objetoTarea] ))
        
        // Reseteap de los input 
        setTitulo('')
        setDescripcion('')
    }

    //Generar ID -- CODIGO PARA GENERAR ID 
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
            
        return random + fecha
    }
        

  return (
    <div className="text-center font-bold md:w-2/4 mb-10">
        
        <h2 className="text-4xl ">Agrega tus tareas del día</h2>
        <p className="text-lg">Aquí puedes {''}
            <span className="text-red-500">definir tus tareas</span>
        </p>


        <form 
            className="uppercase bg-white rounded-lg shadow-lg mt-10 py-10 " 
            onSubmit={ handleAdd }
            >
            { error && <Error />}
            <label>Titulo</label>
            <div className="font-normal mb-10">
                <input 
                    className="border-2 p-5 "
                    type="text"
                    placeholder="Un titulo para tu tarea"
                    // El value sin el onchange no se puede (Warning)
                    value={titulo}
                    onChange={ (e) => setTitulo(e.target.value) }
                />
            </div>

            <label>Describe tu tarea</label>
            <div className=" font-normal mb-10">
                <textarea 
                    className="border-2 p-10" 
                    type="text" 
                    placeholder="Describe aqui tu tarea"
                    value={descripcion}
                    onChange={ (e) => setDescripcion(e.target.value) }
                />
            </div>
            <input
                className="cursor-pointer rounded-sm bg-blue-600 text-white uppercase py-2 px-20" 
                type="submit" 
                value={'Agregar Tarea'}
            />
        </form>
    </div>
  )
}
