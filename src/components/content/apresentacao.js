// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { CardGroup, Card } from 'react-bootstrap';
import Celular from '../img/ezi-deshboard.png'

const apresentacao = () => (

    <Card style={{border: "none", background: "#F7F7F7", paddingTop: "4%"}}>
        <Card.Body>
            <CardGroup style={{background: "#F7F7F7"}}>
                <Card style={{border: "none", background: "#F7F7F7"}}>
                    <Card.Body style={{background: "#F7F7F7"}}>
                        <Card  className="text-right" style={{background: "#F7F7F7",border: "none", paddingTop: "28%", width:  "67%", float: "right"}}>
                            <Card.Body>
                                <Card.Text style={{fontSize: '1.475rem', fontWeight: "600", color: "#4EAFFF "}}>
                                    Que tal abrir uma conta digital para ver como a gente faz a sua vida mais simples?
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                <Card style={{border: "none", background: "#F7F7F7"}}>
                    <Card.Text>
                         <img src={Celular} className="img" aria-hidden="true" alt=""/>
                    </Card.Text>
                </Card>
            </CardGroup>
        </Card.Body>
        <hr style={{ height: "17px", border: "none", color: "#006FBF", backgroundColor: "#006FBF", marginTop: "0px", marginBottom: "0px" }} />
                <hr style={{ height: "17px", border: "none", color: "#0093BF", backgroundColor: "#0093BF", marginTop: "0px", marginBottom: "0px" }} />
                <hr style={{ height: "17px", border: "none", color: "#4EAFFF", backgroundColor: "#4EAFFF", marginTop: "0px", marginBottom: "0px" }} />
    </Card>

);

export default apresentacao;