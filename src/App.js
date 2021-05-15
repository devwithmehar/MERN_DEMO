import Navbar from './components/Navbar'
import Login from './components/Login'
import Registeration from './components/Registeration'
import './Style/App.css'
import Home from './components/Home'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import {React , useEffect , useState} from 'react';




function App() {
  

  const [login, setLogin] = useState(false)
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
 
  useEffect(() => {   
    console.log('I am practicing UseEffect')
    
    if(  localStorage.getItem('token'))
    {
      
       setLogin(prev => !prev);
       setFullName(localStorage.getItem('FullName'));
       setUsername(localStorage.getItem('Username'));
       
    }
    
 }, []);



  return (
    <div id="main">

      <Router>
          <div id="App">
           
      
            <Switch>
            <Route exact path='/'  >
              <Navbar  name={fullName} isLogin={login} username={username} />
              <Home />
            </Route>
            
            <Route path='/login' component={Login} />
           
            
            <Route path='/register' component={Registeration} />
            
            </Switch>
         </div>
        </Router>
    </div>
  );
}

export default App;
