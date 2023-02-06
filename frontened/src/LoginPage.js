import {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(email==='admin@example.com' && password ==='admin'){
            setIsLoggedIn(true)
        }
        else{
            setError('Invalid email or password');
        }
    };

    if (isLoggedIn){
       return <Redirect to="/" />
    }

    return (  
        
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>E-mail: <input  Required type="email" value={email} onChange={(e) => setEmail(e.target.value)}> </input> </label>
                <label type="password">Password: <input Required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input> </label>
                <button type="submit">Enter</button>
                {error && <div>{error}</div>}
            </form>
            <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
    );
}
 
export default LoginPage;