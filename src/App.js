import Navbar from './components/Navbar'
import Login from './components/Login'
import Registeration from './components/Registeration'
import './Style/App.css'
import Home from './components/Home'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import {React } from 'react';
import {UserInfo} from './Context/userContext';
import UserInformation from './components/UserInformation';
import Logout from './components/Logout'


function App() {
  
  return (
    <UserInfo>
    <div id="main">

      <Router>
        
          <div id="App">
          <Navbar   />
      
            <Switch>
            <Route exact path='/'  >
              
              <Home />
            </Route>
            
            <Route path='/login' component={Login} />
           
            <Route path='/logout' component={Logout} />
            
            <Route path='/register' component={Registeration} />

            <Route path='/userInfo' component={UserInformation} />
            
            </Switch>
         </div>
        </Router>
    </div>
    </UserInfo>
  );
}

export default App;
