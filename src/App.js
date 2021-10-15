import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/NavBar'
import Add from './add/Add'
import Users from './users/Users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Route component={NavBar} />
      <Switch>
        <Route exact path="/" component={Add} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
