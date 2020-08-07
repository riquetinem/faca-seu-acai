import React from 'react';
import { Route } from 'react-router-dom';

import Flavor from '../pages/Flavor';

const Routes: React.FC = () => <Route path="/" component={Flavor} />;

export default Routes;
