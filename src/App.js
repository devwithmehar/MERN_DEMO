import Navbar from './components/Navbar'
import Login from './components/Login'
import Registeration from './components/Registeration'
import './Style/App.css'
import Home from './components/Home'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div id="main">

      <Router>
          <div id="App">
           <Navbar />
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registeration} />
            </Switch>
         </div>
        </Router>
    </div>
  );
}

export default App;
