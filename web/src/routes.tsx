import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mapa-de-orfanatos" component={OrphanagesMap} />
        <Route  path="/orfanatos/:id" component={Orphanage} />
        <Route  path="/orfanatos-criar" component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  );
}
