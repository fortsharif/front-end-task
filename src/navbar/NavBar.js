import React from 'react'
import { Card, Button, ListGroup, ListGroupItem, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {

    const user = () => {

        props.history.push('/users')
    }

    const add = () => {

        props.history.push('/')
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >API TASK FRONT END</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={user}>
                            Users
                        </Nav.Link>
                        <Nav.Link onClick={add}>
                            Add Users
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withRouter(NavBar)