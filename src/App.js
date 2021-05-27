import './App.css';
import React from 'react'
import InstructorForm from './Forms/InstructorForm';
import ClientForm from "./Forms/ClientForm";
import Login from "./Forms/login";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
          <h1>Anytime Fitness Login</h1>
          <Route exact path="/">
            <Login />
          </Route>

        </nav>
      </div>
    </Router>
    
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <h1>Fitness App</h1>
        <InstructorForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
        />
        <ClientForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
        />
      </header>
    </div> */}