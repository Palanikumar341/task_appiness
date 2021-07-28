import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GuardedRoute from './components/auth/GuardedRoute';



function App() {
  const [isAutheticated] = useState(false);

  let [state,setState] = useState({
    username:"hruday@gmail.com",
    password :'hruday123'
  })

  useEffect(()=>{
    localStorage.setItem("userData",JSON.stringify(state))
  })

  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <GuardedRoute exact path="/dashboard" auth={isAutheticated} component={Dashboard} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
