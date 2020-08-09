import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Flavor from '../pages/Flavor';
import Size from '../pages/Size';
import Item from '../pages/Item';
import Finishing from '../pages/Finishing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Flavor} />

    <Route path="/flavor/:idFlavor/size" exact component={Size} />

    <Route path="/flavor/:idFlavor/size/:idSize" exact component={Item} />

    <Route
      path="/flavor/:idFlavor/size/:idSize/items/:idItems?"
      exact
      component={Finishing}
    />
  </Switch>
);

export default Routes;
