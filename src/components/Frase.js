import React from "react";
import { Card} from "react-bootstrap";

const Frase = () => {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <img src="" alt=""></img>
                </div> 
                <div className="col-sm-12 col-md-8">

          <Card.Title>Personaje</Card.Title>
          <Card.Text>
            Frase Aleatorio
          </Card.Text>
                </div>
            </div>
        </Card.Body>
      </Card>
  );
};

export default Frase;
