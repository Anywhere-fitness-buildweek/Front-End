import React from 'react';
import styled from 'styled-components';


export default function ClientForm(props) {
    return (
        <Form>
            <h2>Please provide the following information,<br/>then click 'submit' to create your account</h2>
            <Label>
                First Name: <input
                    type='text'
                    name='first_name'
                />
            </Label>
            <Label>
                Last Name: <input
                    type='text'
                    name='last_name'
                />
            </Label>
            <Label>
                Username: <input
                    type='text'
                    name='username'
                />
            </Label>
            <Label>
                Phone: <input
                    type='tel'
                    name='phone_number'
                />
            </Label>
            <Label>
                Password: <input
                    type='text'
                    name='password'
                />
            </Label>
            <Button>Submit</Button>
        </Form>
    )
}

const Form = styled.form`
    background-color: darkgray;
    color: white;
    border: 1px solid black;
    border-radius: 15px;
    margin: 15px;
    padding: 15px;
`

const Label = styled.label`
    font-size: 1.2rem;
    display: block;
    padding: 5px;
    font-weight: bold;
`

const Button = styled.button`
    font-size: 1.6rem;
    background-color: black;
    color: white;
    border: 2px solid grey;
    padding: 15px;
    font-weight: bold;
    border-radius: 20px;
    margin: 15px;
`