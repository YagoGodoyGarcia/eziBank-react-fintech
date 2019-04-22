// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Card } from 'react-bootstrap';
class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {left: 0};
  }
  
  componentDidMount() {
    //setInterval(function(){ this.setState({left: 500})}, 3000);
  }
    render() {

        return (

            <Card style={{ border: "none", paddingTop: "4%" }} className="text-center">
                {/* <Card.Body>
                <Card.Title style={{ fontSize: "10.875rem", fontWeight: "600", color: "#2DAED4"}}><center>eziBANK</center> </Card.Title>
                    <Card.Text style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2DAED4"}}>
                        
                    A sua conta digital sem mensalidade<br/>
                    Experimente uma conta digital grátis, sem mensalidade, agência nem burocracia.
                    <br/><br/>
                    </Card.Text>

                </Card.Body> */}
                <hr style={{ height: "25px", border: "none", color: "#006FBF", backgroundColor: "#006FBF", marginTop: "0px", marginBottom: "0px" }} />
                <hr style={{ height: "25px", border: "none", color: "#0093BF", backgroundColor: "#0093BF", marginTop: "0px", marginBottom: "0px" }} />
                <hr style={{ height: "25px", border: "none", color: "#4EAFFF", backgroundColor: "#4EAFFF", marginTop: "0px", marginBottom: "0px" }} />
            </Card>
        );
    }
}
export default Home;