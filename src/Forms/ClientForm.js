import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import { StyledForm, StyledLabel, StyledButton } from "./styledForm";
import axiosWithAuth from "./../requests/axiosWithAuth.js";



const initialFormValues = {
    username: "",
    password: "",
    role_id: "",
};

const initialFormErrors = {
    username: "",
    password: "",
    role_id: "",
};
    
    
const initialDisabled = true;

export default function SignUp() {
    const [form, setForm] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const { push } = useHistory();
    
    const formSchema = yup.object().shape({
        username: yup.string().required('required'),
        password: yup.string().required('required'),
        role_id: yup.string().oneOf(["2", "1"], "click a button")
    })
        
    const inputChange = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
            setFormErrors({ ...formErrors, [name]: "" });
            })
            .catch((err) => {
            setFormErrors({ ...formErrors, [name]: err.errors[0] });
            });
        setForm({
            ...form,
            [name]: value,
        });
    };
    const onChange  = evt => {
        const {name, value} = evt.target
        inputChange(name, value)
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        axiosWithAuth()
          .post("api/auth/register", form)
          .then((res) => {
            push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        formSchema.isValid(form).then((valid) => setDisabled(!valid));
      }, [form]);
    // const onSubmit = evt => {
    //     evt.preventDefault()
    //     // submit()
    //     axiosWithAuth()
	// 		.post('api/auth/register', values)
	// 		.then(res => {
	// 			// push('./recipes');
	// 			console.log(res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log('Username or password not valid, must be unique username.', err);
	// 		});

    // }

    return (
        <StyledForm onSubmit={onSubmit}>
            <h2>Please provide the following information,<br/>then click 'submit' to create your account</h2>
            <StyledLabel>Username
                <input
                value={form.username}
                onChange={onChange}
                name='username'
                type='text'
                error={formErrors.username}
                />
            </StyledLabel>
            <StyledLabel>Password
                <input
                value={form.password}
                onChange={onChange}
                name='password'
                type='password'
                error={formErrors.password}
                />
            </StyledLabel>
            <StyledLabel>Client
                <input
                checked={form.role_id === "2".valueOf()}
                value="2"
                onChange={onChange}
                name="role_id"
                type="radio"
                />
            </StyledLabel>
            <StyledLabel>Instructor
                <input
                    checked={form.role_id === "1"}
                    value="1"
                    onChange={onChange}
                    name="role_id"
                    type="radio"
                />
            </StyledLabel>
            <StyledButton>Submit</StyledButton>
        </StyledForm>
    )
}
