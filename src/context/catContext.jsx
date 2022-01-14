import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'

//crear el context
export const CatContext = createContext()

//provider es donde se encuentran las funciones y state 

const CatProvider = (props) => {

  //crear el state del context
  const [categorias, setCategorias] = useState([])

  //ejecutar el llamado a la api
  useEffect(() => {

    const apiCallCategories = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

      const catRespuesta = await axios.get(url)
      setCategorias(catRespuesta.data.drinks)
    }

    apiCallCategories()
  }, [])

  return (
    //usar el context creado en la linea 4 "CatContext = createContext()"
    <CatContext.Provider
      value={// variables accesibles para todos los componentes
        {
          categorias
        }
      }
    >
      {props.children}
    </CatContext.Provider>
  )
}

export default CatProvider