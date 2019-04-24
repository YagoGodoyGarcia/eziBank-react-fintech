// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Modal, Form, Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import LogoEzi from '../img/logoezibank.png'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };

        
    }
    render() {
        return (
            <div>
            <Navbar variant="light" className='Header'>
                <Navbar.Brand href="#home" id="Logo" className="mr-auto">
                    <img src={LogoEzi} className="" aria-hidden="true" alt="" width="159px" height="auto"/>
                </Navbar.Brand>
                <button className='ButtonCadastrar' onClick={this.handleShow} >
                    ABRA SUA CONTA!
                </button>
            </Navbar>
            <Modal
                show={this.state.show}
                onHide={this.handleHide}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        ABRA SUA CONTA!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome completo" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Telefone</Form.Label>
                        <InputMask className="form-control" {...this.props} mask="(99) 99999-9999" maskChar=" " placeholder="Digite seu telefone"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>CPF</Form.Label>
                        <InputMask className="form-control" {...this.props} mask="999.999.999-99" maskChar=" " placeholder="Digite seu CPF"/>
                    </Form.Group>
                  
                    <Button className="continuar" size="lg" block>
                        Continuar
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            </div>
        );
    }
}

export default Header;