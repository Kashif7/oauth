
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './login/Login.jsx';
import { Profile } from './profile/profile.jsx';

const root = document.querySelector('#root');

const App = () => (<div><Main /></div>);

const Main = () => (<main>
<Switch>
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
</Switch>
</main>
);

render(<BrowserRouter>
    <App />
  </BrowserRouter>, root);
