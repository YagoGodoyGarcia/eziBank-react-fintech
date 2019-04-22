// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { CardGroup, Card, Row } from 'react-bootstrap';
import Celular from '../img/ezi-deshboard.png'
const apresentacao = () => (

    <Card style={{border: "none", background: "#2DAED4", paddingTop: "4%"}}>
        <Card.Body>
            <CardGroup style={{background: "#2DAED4"}}>
                <Card style={{border: "none", background: "#2DAED4"}}>
                    <Card.Body style={{background: "#2DAED4"}}>
                        <Card  className="text-right" style={{background: "#2DAED4",border: "none", paddingTop: "28%", width:  "67%", float: "right"}}>
                            <Card.Body>
                                <Card.Text style={{fontSize: "1.875rem", fontWeight: "600", color: "#fff", textShadow: "#144B5B 0.1em 0.1em 0.50em"}}>
                                    Que tal abrir uma conta digital para ver como a gente faz a sua vida mais simples?
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                <Card style={{border: "none", background: "#2DAED4"}}>
                    <Card.Text>
                         <img src={Celular} className="img"/>
                    </Card.Text>
                </Card>
            </CardGroup>
        </Card.Body>
    </Card>

);

export default apresentacao;