import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router';


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
            <h2>Welcome back, foodies!</h2>
            <form onSubmit={onSubmit}>
                <label>Username <br/>
                        <input
                            onChange={onChange}
                            value={values.username}
                            name='username'
                            type='text'
                            error={errors.username}
                            />
                    </label>
                    <label>Password <br/>
                        <input
                            onChange={onChange}
                            value={values.password}
                            name='password'
                            type='password'
                            error={errors.password}
                        />
                    </label>
                <button variant={disabled ? 'disabled' : 'success'}>Login</button>
            </form>
        </div>
    )
}