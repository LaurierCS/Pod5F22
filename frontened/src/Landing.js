import land from '../src/images/signimg.png';
import './index.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
//import LoginPage from './LoginPage';

const Landing = () => {
    return (  
        <div className="landing">
            <h1>Umotive</h1>
            <div className="buttons">
                <Link to='/loginpage'>
                <button type="submit" className="loginb" >Login</button>
                </Link>
                <Link to='/signup'>
                <button type="submit" className="signupb">Signup</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Landing;
