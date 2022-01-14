import { useContext, useState } from "react"
import { CatContext } from "../context/catContext";
import { RecetasContext } from "../context/RecetasContext";

const Form = () => {

  const { categorias } = useContext(CatContext)
  const { setBuscarRecetas, setConsultar } = useContext(RecetasContext)

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: ""
  })
  const [error, setError] = useState(false)
  //funcion para leer los contenidos
  const obtenerDatosReceta = e => {
    setError(false)
    setBusqueda({ ...busqueda, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (busqueda.nombre === "" && busqueda.categoria === "") return setError(true)

    setBuscarRecetas(busqueda)
    setConsultar(true)
    
  }

  return (
    <form
      action=""
      className="col-12"
      onSubmit={handleSubmit}
    >
      <fieldset className="text-center">
        <legend>Bebidas Por Categoría ó Ingrediente </legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar Por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            id=""
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map(cat => (
              <option
                key={cat.strCategory}
                value={cat.strCategory}
              >{cat.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
      {error ? <p className="text-center pt-3">Elige al menos una opción</p> : null}
    </form>
  );
}

export default Form;