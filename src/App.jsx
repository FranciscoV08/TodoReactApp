import { useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListaDeTareas } from './components/ListaDeTareas'

function App() {
// En el state almacenaremos todas las tareas

  const [tareas, setTareas] = useState([])

  const deletTarea = (id) =>{
    const filtroTarea = tareas.filter(tarea => ( tarea.id !== id))
    setTareas(filtroTarea)
  }

  return (
  <div className='container mx-auto'>

    <Header />

    <div className='mt-10 md:flex '>
      <Formulario 
        setTareas={setTareas}
      />
      <ListaDeTareas 
        tareas={tareas}
        deletTarea={deletTarea}
      />
    </div>
  </div>
  )
}

export default App
