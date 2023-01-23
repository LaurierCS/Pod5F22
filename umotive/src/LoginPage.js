import {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (  
        
        <div className="login">
            <form >
                <label>E-mail: <input  Required type="email" value={email} onChange={(e) => setEmail(e.target.value)}> </input> </label>
                <label type="password">Password: <input Required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input> </label>
                <button type="submit">Enter</button>
            </form>
            <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
    );
}
 
export default LoginPage;