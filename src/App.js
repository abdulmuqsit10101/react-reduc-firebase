import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import {useSelector} from "react-redux";

function App() {
  const auth = useSelector(state => state.firebase.auth)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Redirect to="/projects" />
          </Route>
          <Route exact path='/projects' >
            { auth.uid ? <Dashboard /> : <Redirect to='/signin' /> }
          </Route>
          <Route exact path='/project/:id' render={(props) => { return auth.uid ? <ProjectDetails {...props} /> : <Redirect to='/signin' /> }} />
          <Route path='/create'  >
            { auth.uid ? <CreateProject /> : <Redirect to='/signin' /> }
          </Route>
          <Route path='/signin'  >
            { !auth.uid ? <SignIn /> : <Redirect to='/projects' /> }
          </Route>
          <Route path='/signup'  >
            { !auth.uid ? <SignUp /> : <Redirect to='/projects' /> }
          </Route>
          {/*<Route path='/project/:id' component={ProjectDetails}/>*/}
          {/*<Route path='/signin' component={SignIn}/>*/}
          {/*<Route path='/signup' component={SignUp}/>*/}
          {/*<Route path='/create' component={CreateProject}/>*/}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
