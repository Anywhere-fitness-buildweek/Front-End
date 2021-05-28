import React from 'react'
import styled from 'styled-components'
import formImg from '/Users/fervelgo/Desktop/lambdaProjects/Unit2/Build-Week/frontend/src/images/fitness.jpg'


const StyledForm = styled.form `
    background-image: url(${formImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    border: 1px solid black;
    border-radius: 15px;
    margin: 15px;
    padding: 15px;
    display:block;

    @media (max-width: 550px) {
      width: 100% auto;
  }

  h2 {
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 5px black;
  }
`

const StyledLabel = styled.label `
    font-size: 1.2rem;
    display: block;
    padding: 10px;
    font-weight: bold;
    margin: 5px;
    text-shadow: 2px 2px 5px black;
`

const StyledButton = styled.button `
    background-color: white;
    color: black;
    font-size: 1.3rem;
    border: 2px solid grey;
    padding: 15px;
    font-weight: bold;
    border-radius: 15px;
    margin: 15px;

        &:hover {
         transform: scale(1.1);
         }
`

const StyledInput = styled.input `
    padding: 8px;
    margin: 5px;
    border-radius: 5px;

`

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
        <StyledInput
        value={values.username}
        onChange={onChange}
        name='username'
        type='text'
        placeholder="Patches O'Houlihan"
        />
    </StyledLabel>
    <StyledLabel>Cell Number 
        <StyledInput
        value={values.cell}
        onChange={onChange}
        name='cel number'
        type='text'
        placeholder='###-###-###'
        />
    </StyledLabel>
    <StyledLabel>Password 
        <StyledInput
        value={values.password}
        onChange={onChange}
        name='password'
        type='password'
        placeholder="----------"
        />
    </StyledLabel>
    
        <StyledButton>Submit</StyledButton>
    </div>

</StyledForm>

)

}