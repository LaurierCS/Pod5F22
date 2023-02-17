import React from 'react'
// import { Link } from 'react-router-dom'

import '../../src/App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Sign Up</h2>
            <form action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="confirmpassword" name="confirmpassword" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://lauriercs.ca/" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            {/* <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
        </div>
    )

}