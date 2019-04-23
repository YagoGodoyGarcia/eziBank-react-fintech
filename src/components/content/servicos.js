// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { CardDeck, Card, Image } from 'react-bootstrap';
import Cartao from '../img/cartao.png'
import Dinheiro from '../img/dinheiro.png'
import Cofre from '../img/cofre.png'

const servicos = () => (
    <Card style={{ border: "none", marginTop: "1%", width: "100%" }}>
        <center>
            <Card.Text style={{fontSize: "1.875rem", fontWeight: "600", color: "#2E2F2F", padding: "5%"}}>
                Resolva sua vida direto no app!
            </Card.Text>
        </center>    
        <CardDeck style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "10%", width: "100%" }}>
            <Card className="text-center" style={{ paddingLeft: "5%", paddingRight: "5%",background: "#006FBF", color: "#fff" }}>
                <center style={{ paddingTop: "10%" }}>
                    <Image src={Cartao} roundedCircle width="200px" height="200px" />
                </center>
                <Card.Body>
                    <Card.Title>Crédito</Card.Title>
                    <Card.Text>
                        Sua conta digital tem cartão de crédito sem anuidade nem complicação.
                     </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center" style={{ paddingLeft: "5%", paddingRight: "5%", background: "#0093BF", color: "#fff" }}>
                <center style={{ paddingTop: "10%" }}>
                    <Image src={Dinheiro} roundedCircle width="200px" height="200px" />
                </center>
                <Card.Body>
                    <Card.Title>Ezi+</Card.Title>
                    <Card.Text>
                        Quem usa sempre a conta digital Ezi tem transferências e boletos grátis infinitos.
                     </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center" style={{ paddingLeft: "5%", paddingRight: "5%",background: "#4EAFFF", color: "#fff" }}>
                <center style={{ paddingTop: "10%" }}>
                    <Image src={Cofre} roundedCircle width="200px" height="200px" />
                </center>
                <Card.Body>
                    <Card.Title>Investimentos</Card.Title>
                    <Card.Text>
                        Rendem mais que a poupança e você resgata quando quiser.
                     </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </Card>

);

export default servicos;