import './App.css';
import React from 'react'
import ClientForm from "./Forms/ClientForm";
import Login from "./Forms/login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState} from 'react';

const initialFormValues = {
  username:'',
  password:'',
}

const initialUsers = []

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }


  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    setUsers([...users, newUser])
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
              <Link to="/newUser">New User Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/newUser">
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