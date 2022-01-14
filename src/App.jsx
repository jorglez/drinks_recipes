import Form from "./components/Form";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import CatProvider from "./context/catContext";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CatProvider>
      <RecetasProvider>
        <ModalProvider>
          
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListaRecetas />
          </div>

        </ModalProvider>
      </RecetasProvider>
    </CatProvider>
  );
}

export default App;
