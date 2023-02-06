import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import MessageBoard from './MessageBoard';
//mport LoginPage from './LoginPage';
import Landing from './Landing';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Navbar />
            <Home/>
          </Route>
          <Route path="/messageboard">
          <Navbar />
            <MessageBoard></MessageBoard>
          </Route>
          <Route>
            <Landing/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
