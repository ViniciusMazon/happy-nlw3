import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mapa-de-orfanatos" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}
