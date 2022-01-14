import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    maxHeight: 600,
    overflowY: "scroll",
    overflowX:"none",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ nombre, image, id }) => {

  //configuracion del material ui
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const mostrarIngredientes = (rec) => {
    let ingredientes = []
    for (let i = 1; i < 16; i++) {
      if (rec[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>{rec[`strIngredient${i}`]}: {rec[`strMeasure${i}`]}</li>
        )
      }

    }
    return ingredientes
  }

  const { receta, guardarIdReceta, setReceta } = useContext(ModalContext)

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{nombre} </h2>
        <img src={image} alt={nombre} className="card-img-top" />
        <div className="card-body">
          <button type="button" className="btn btn-primary btn-block"
            onClick={() => {
              guardarIdReceta(id)
              handleOpen()
            }}
          >
            Ver Receta
          </button>

          <Modal open={open} onClose={() => {
            handleClose()
            guardarIdReceta(null)
            setReceta({})
          }}>
            <div style={modalStyle} className={classes.paper}>
              <h2>{receta.strDrink}</h2>
              <h3 className="mt-4">Instrucciones de Preparación</h3>
              <p>{receta.strInstructions}</p>

              <img src={receta.strDrinkThumb} alt="" className="img-fluid my-4" />

              <h3>Ingredientes</h3>
              <ul>
                {mostrarIngredientes(receta)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Receta;