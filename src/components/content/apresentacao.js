// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { CardGroup, Card, Row } from 'react-bootstrap';
import Celular from '../img/neon-dashboard.png'
const apresentacao = () => (

    <Card style={{border: "none", marginTop: "1%"}}>
        <Card.Body>
            <CardGroup>
                <Card style={{border: "none"}}>
                    <Card.Body>
                        <Card  className="text-right" style={{border: "none", paddingTop: "28%", width:  "67%", float: "right"}}>
                            <Card.Body>
                                <Card.Text style={{fontSize: "1.875rem", fontWeight: "600"}}>
                                    Que tal abrir uma conta digital para ver como a gente faz a sua vida mais simples?
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                <Card style={{border: "none"}}>
                    <Card.Text>
                         <img src={Celular} width="300" height="auto"/>
                    </Card.Text>
                </Card>
            </CardGroup>
        </Card.Body>
    </Card>

);

export default apresentacao;