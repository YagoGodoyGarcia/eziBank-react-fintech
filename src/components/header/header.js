// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Form, Row, FormControl, Button, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar variant="light" style={{ padding: "inherit", background: "#fff", boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px"}}>
        <Navbar.Brand href="#home" style={{ marginLeft: '1%' }} className="mr-auto"> <h1>eziBANK</h1></Navbar.Brand>
        <Button style={{ background: '#007bff', padding: "1%", marginTop: "0%", borderRadius: "0%", width: "13%" }} variant="primary" size="lg">
            ABRA SUA CONTA!
        </Button>
    </Navbar>

);

export default Header;