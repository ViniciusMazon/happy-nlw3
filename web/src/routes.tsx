import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import CreateOrphanageSuccess from './pages/CreateOrphanageSuccess';
import RegisteredOrphanages from './pages/RegisteredOrphanages';
import PendingRegistrations from './pages/PendingRegistrations';
import DeleteOrphanageSuccess from './pages/DeleteOrphanageSuccess';
import EditOrphanage from './pages/EditOrphanage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mapa-de-orfanatos" component={OrphanagesMap} />
        <Route path="/orfanatos/:id" component={Orphanage} />
        <Route exact path="/orfanatos-criar" component={CreateOrphanage} />
        <Route
          path="/orfanatos-criar/success"
          component={CreateOrphanageSuccess}
        />
        <Route
          exact
          path="/dashboard/orfanatos-cadastrados"
          component={RegisteredOrphanages}
        />
        <Route
          path="/dashboard/orfanatos-cadastrados/excluir"
          component={DeleteOrphanageSuccess}
        />
        <Route
          path="/dashboard/registros-pendentes"
          component={PendingRegistrations}
        />
        <Route
          path="/dashboard/editar-orfanato/:id"
          component={EditOrphanage}
        />
      </Switch>
    </BrowserRouter>
  );
}
