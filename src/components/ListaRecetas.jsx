import { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';


const ListaRecetas = () => {

  const { recetas } = useContext(RecetasContext)

  return (
    <div className="row mt-5">
      {recetas.map(receta =>(
        <Receta
          key={receta.idDrink}
          nombre={receta.strDrink}
          image={receta.strDrinkThumb}
          id={receta.idDrink}
        />
      ))}
    </div>
  );
}

export default ListaRecetas;