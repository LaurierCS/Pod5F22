import React from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
// import ForgetPasswordPage from './components/ForgetPasswordPage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    {/* <Route path="/forget-password" component={ ForgetPasswordPage } /> */}
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }><a href="https://lauriercs.ca/" target="_blank" rel="noopener noreferrer">Contact us</a></p>
    )
}

const FooterStyle = {
    background: "#fff",
    fontSize: "1rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
