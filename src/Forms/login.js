import React,{useState, useEffect} from 'react';
import axiosWithAuth from "./../requests/axiosWithAuth";
import * as yup from 'yup';
import { useHistory } from 'react-router';
import { StyledForm, StyledLabel, StyledButton } from "./styledForm";



const INITIAL_FORM_VALUES = {
    username: '',
    password: ''
} 

const INITIAL_FORM_ERRORS = {
    username: '',
    password: ''
}

const schema = yup.object().shape({
    username: yup.string().required('required'),
    password: yup.string().required('required')
})


export default function Login(props) {
    const { submit, setUserID } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory();

    login = () => {
        axiosWithAuth()
        .post("/api/auth/login", values)
        .then(res => {
            
        })
    }


    const onSubmit = event => {
        event.preventDefault()
        schema.validate(values)
        .then(_ => {
        submit(values, push, setUserID);
        setValues(INITIAL_FORM_VALUES);
        setErrors(INITIAL_FORM_ERRORS) 
        })
        .catch(err => {
            console.error(err)
        })       
    }

    const onChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
             [name]: value
            })
        //could insert validation schema here

        yup.reach(schema, name)
            .validate(value)
            .then(_ => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({ 
                    ...errors,
                    [name]: err.errors[0]
                })
                    setDisabled(true)
            })
    }

    useEffect(() => {
        schema.validate(values)
            .then(isValid => setDisabled(!isValid))
            .catch(err => console.log(err))
    })
    

    return (
        <div>
            <h2>Welcome back!</h2>
            <StyledForm onSubmit={onSubmit}>
                <StyledLabel>Username <br/>
                        <input
                            onChange={onChange}
                            value={values.username}
                            name='username'
                            type='text'
                            error={errors.username}
                            />
                    </StyledLabel>
                    <StyledLabel>Password <br/>
                        <input
                            onChange={onChange}
                            value={values.password}
                            name='password'
                            type='password'
                            error={errors.password}
                        />
                    </StyledLabel>
                <StyledButton variant={disabled ? 'disabled' : 'success'}>Login</StyledButton>
            </StyledForm>
        </div>
    )
}