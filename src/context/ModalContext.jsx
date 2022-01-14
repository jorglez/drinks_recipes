import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


//crear el contexto
export const ModalContext = createContext()

const ModalProvider = (props) => {
  //states
  const [idReceta, guardarIdReceta] = useState(null)
  const [receta, setReceta] = useState({})

  //buscar recera por medio del id tomado del boton
  useEffect(() => {
    const apiCallReceta= async()=>{
      if(!idReceta) return
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
      const getReceta = await axios.get(url)
      setReceta(getReceta.data.drinks[0])
    }
    apiCallReceta()
  }, [idReceta])



  return (
    <ModalContext.Provider value={{
      receta,
      guardarIdReceta,
      setReceta
    }}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;