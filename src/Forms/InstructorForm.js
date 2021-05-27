import React from 'react'
import { StyledForm, StyledLabel, StyledButton } from "./styledForm";


export default function InstructorForm (props) {
    const {
        values,
        change,
        submit
    } = props

    const onChange  = evt => {
        const {name, value} = evt.target
        change(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
    <StyledForm onSubmit={onSubmit}>
        <div>
            <h2>Welcome Coach! Fill in the fields below to create your account:</h2>

        <StyledLabel>Username
            <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
            />
        </StyledLabel>
        <StyledLabel>Cell Number
            <input
            value={values.cell}
            onChange={onChange}
            name='cel number'
            type='number'
            />
        </StyledLabel>
        <StyledLabel>Password
            <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
            />
        </StyledLabel>
        
            <StyledButton>Submit</StyledButton>
        </div>

    </StyledForm>

    )

}