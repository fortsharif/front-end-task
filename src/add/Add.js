import React, { useRef, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

const url = 'http://localhost:5000/api/v1/user/add'

const Add = (props) => {

    const emailContainer = useRef(null)
    const firstNameContainer = useRef(null)
    const surnameContainer = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        /* var formData = new FormData()

        formData.append('email', emailContainer.current.value)
        formData.append('firstName', firstNameContainer.current.value)
        formData.append('surname', surnameContainer.current.value) */

        let data = { email: emailContainer.current.value, firstName: firstNameContainer.current.value, surname: surnameContainer.current.value }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

        const status = await response.status
        if (status === 500) {
            console.log('bad')
        }
        else if (status === 200) {
            props.history.push('/users')
        }
    }

    useEffect(() => {

    }, [])

    return <>
        <Container className='mt-5'>
            <Row className="justify-content-md-center">
                <Col md="auto" className='text-center'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Email@email.com" ref={emailContainer} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" placeholder="John" ref={firstNameContainer} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" placeholder="Doe" ref={surnameContainer} />

                        </Form.Group>






                        <Button variant="dark" type="submit">
                            Create
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    </>
}

export default withRouter(Add)