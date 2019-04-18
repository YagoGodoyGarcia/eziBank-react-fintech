// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Form, Row, FormControl, Button, Nav, Card } from 'react-bootstrap';

const Header = () => (
    <Navbar variant="light"  className='Header'>
        <Navbar.Brand href="#home" style={{ marginLeft: '1%'}} className="mr-auto"> 
            eziBANK
        </Navbar.Brand>
        <button className='ButtonCadastrar'>
            ABRA SUA CONTA!
        </button>
    </Navbar>

);

export default Header;