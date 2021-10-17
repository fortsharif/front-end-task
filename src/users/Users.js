import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button, ListGroup, ListGroupItem, CardGroup, Row, Col, Container, Form } from 'react-bootstrap'

let url = 'http://localhost:5000/api/v1/user'

const Users = (props) => {

    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const emailContainer = useRef(null)

    const handleSubmit = async (e, id) => {
        e.preventDefault()
        console.log(email)
        let newUrl = `${url}/update/${id}`

        let data = { email: email }

        const response = await fetch(newUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

        getUsers()


    }


    const handleDelete = async (id) => {
        let newUrl = `${url}/delete/${id}`

        console.log(newUrl)

        const response = await fetch(newUrl, {
            method: 'DELETE'
        })

        const status = await response

        getUsers()
    }

    const getUsers = async () => {
        const response = await fetch(url, {
            method: 'GET'
        })

        //const status = await response.status

        const data = await response.json()

        setUsers(() => data)
    }

    useEffect(() => {
        getUsers()
    }, [users])

    return (
        <Container>
            <Row xs={2} md={4} >
                {users ? users.map((user) => {

                    return <Col key={user.Id}>
                        <Card border='dark' style={{ width: '18rem' }}>
                            <Card.Header>{user.Id}</Card.Header>

                            <Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>First Name: {user.GivenName}</ListGroupItem>
                                    <ListGroupItem>Last Name: {user.FamilyName}</ListGroupItem>
                                    <ListGroupItem>Email: {user.Email}</ListGroupItem>
                                </ListGroup>
                                <Button variant="primary" onClick={() => { handleDelete(user.Id) }}>Delete</Button>
                            </Card.Body>

                            <Form onSubmit={(e) => { handleSubmit(e, user.Id) }}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>New Email: </Form.Label>
                                    <Form.Control type="email" placeholder="Email@email.com" onChange={(e) => setEmail(() => e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>

                                <Card.Footer className="text-muted">{<Card.Text> Created on {user.Created} </Card.Text>}</Card.Footer>
                            </Form>
                        </Card>
                    </Col>
                }) : <h1>No Users</h1>}
            </Row>
        </Container >
    )
}

export default withRouter(Users)