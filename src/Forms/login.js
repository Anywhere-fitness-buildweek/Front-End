import React,{useState} from 'react';
// import axiosWithAuth from "./../requests/axiosWithAuth";
import axios from "axios";
import { useHistory } from 'react-router';
import { StyledForm, StyledLabel, StyledButton } from "./styledForm";



const INITIAL_FORM_VALUES = {
    username: '',
    password: '',
    role_id: '',
} 

const INITIAL_FORM_ERRORS = {
    username: '',
    password: '',
    role_id: '',
}

const INITIAL_USERS = [];


export default function Login() {
    const [users, setUsers] = useState(INITIAL_USERS);
    const [, setValues] = useState(INITIAL_FORM_VALUES);
    const [errors, ] = useState(INITIAL_FORM_ERRORS)
    const [disabled, ] = useState(true)
    const { push } = useHistory();

    const onChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
      };
      const onSubmit = (evt) => {
        evt.preventDefault();
        axios
          .post("https://anywhere-fitness-build-week.herokuapp.com/api/auth/login", users)
          .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            if (users.role_id === "2") {
              push("/client-walk");
            } else if (users.role_id === "1") {
              push("/inst-walk");
            }
            setValues(INITIAL_FORM_VALUES);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

    return (
        <div>
            <h2>Welcome back!</h2>
            <StyledForm onSubmit={onSubmit}>
            <StyledLabel>Username <br/>
                    <input
                        onChange={onChange}
                        value={users.username}
                        name='username'
                        type='text'
                        error={errors.username}
                        />
                </StyledLabel>
                <StyledLabel>Password <br/>
                    <input
                        onChange={onChange}
                        value={users.password}
                        name='password'
                        type='password'
                        error={errors.password}
                    />
                </StyledLabel>
                <StyledLabel>Client
                    <input
                    checked={users.role_id === "2".valueOf()}
                    value="2"
                    onChange={onChange}
                    name="role_id"
                    type="radio"
                    />
                </StyledLabel>
                <StyledLabel>Instructor
                    <input
                        checked={users.role_id === "1"}
                        value="1"
                        onChange={onChange}
                        name="role_id"
                        type="radio"
                    />
                </StyledLabel>
                <StyledButton variant={disabled ? 'disabled' : 'success'}>Login</StyledButton>
            </StyledForm>
        </div>
    )
}