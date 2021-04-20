import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Frase from './components/Frase';
function App() {
  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
      <img src={process.env.PUBLIC_URL+'logo.png' } className="w-50" alt="logo The Simpsons"/>
      <Button variant="warning" className="my-5">Obtener frase</Button>
      <Frase/>
      </article>
    </section>
  );
}

export default App;
