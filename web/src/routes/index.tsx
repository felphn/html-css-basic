import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };
