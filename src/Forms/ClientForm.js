import React from 'react';
import styled from 'styled-components';
import formImg from '/Users/fervelgo/Desktop/lambdaProjects/Unit2/Build-Week/frontend/src/images/fitness3.jpg'


export default function ClientForm(props) {
    return (
        <Form>
            <h2>Please provide the following information,<br/>then click 'submit' to create your account</h2>
            <Label>
                First Name: <StyledInput
                    type='text'
                    name='first_name'
                />
            </Label>
            <Label>
                Last Name: <StyledInput
                    type='text'
                    name='last_name'
                />
            </Label>
            <Label>
                Username: <StyledInput
                    type='text'
                    name='username'
                />
            </Label>
            <Label>
                Phone: <StyledInput
                    type='tel'
                    name='phone_number'
                />
            </Label>
            <Label>
                Password: <StyledInput
                    type='text'
                    name='password'
                />
            </Label>
            <Button>Submit</Button>
        </Form>
    )
}

const Form = styled.form`
    background-image: url(${formImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
    text-shadow: 2px 2px 5px black;
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

const StyledInput = styled.StyledInput `
    padding: 8px;
    margin: 5px;
    border-radius: 5px;

`