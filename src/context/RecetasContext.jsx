import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'



export const RecetasContext = createContext()

const RecetasProvider = (props) => {

  const [consultar, setConsultar] = useState(false)
  const [recetas, setRecetas] = useState([])
  const [buscarRecetas, setBuscarRecetas] = useState({
    nombre: "",
    categoria: ""
  })
  const { nombre, categoria } = buscarRecetas

  useEffect(() => {
    if (consultar) {
      const obtenerReceta = async () => {
        const url = categoria
          ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
          : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`
        const resultado = await axios.get(url)

        setRecetas(resultado.data.drinks)

      }
      obtenerReceta()
    }

    
  }, [buscarRecetas])


  return (
    <RecetasContext.Provider value={{
      recetas,
      setBuscarRecetas,
      setConsultar
    }}>
      {props.children}
    </RecetasContext.Provider>
  );
}

export default RecetasProvider;