import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";
import "./components/Spinner.css";

function App() {
  //creostate
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    //logica a ejecutar
    consultarAPI();
  }, []); //[]aqui van los states que me interesa controlar, como solo tengo uno, no pongo nada y es "todos"

  const consultarAPI = async () => {
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    setPersonaje(resultado[0]); //como aqui actualizo el estado se vuelve a ejecutar useeffect
    setTimeout(
      function(){setCargando(false)}, 1000)
  };

  //operador ternario (condicion) ? iftrue : iffalse
  const mostrarComponente = cargando ? (
    <Spinner />
  ) : (
    <Frase personaje={personaje} />
  );

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          className="w-25"
          alt="logo The Simpsons"
        />
        <Button
          variant="warning"
          className="my-5"
          onClick={() => consultarAPI()}
        >
          Get quote
        </Button>
        {mostrarComponente}
      </article>
    </section>
  );
}

export default App;
