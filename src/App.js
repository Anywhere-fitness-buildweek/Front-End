import './App.css';
import React from 'react'
import InstructorForm from './Forms/InstructorForm';
import ClientForm from "./Forms/ClientForm";
import Login from "./Forms/login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState} from 'react';

const initialFormValues = {
  username:'',
  password:'',
  cellNumber:''
}

const initialInstructors = []

function App() {

  const [instructors, setInstructors] = useState(initialInstructors)
  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }


  const formSubmit = () => {
    const newInstructor = {
      username: formValues.username.trim(),
      cell: formValues.password.trim(),
      password: formValues.cellNumber.trim(),
    }
    setInstructors([...instructors, newInstructor])
    setFormValues(initialFormValues)
  }


  return (
    <Router>
      <div>
        <nav>
          <h1>Anytime Fitness</h1>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/newUser/instructor">New Instructor Form</Link>
            </li>
            <li>
              <Link to="/newUser/client">New Customer Form</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/newUser/instructor">
            <InstructorForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            />
          </Route>
          <Route exact path="/newUser/client">
            <ClientForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>       
      </div>
    </Router>
    
  );
}

export default App;