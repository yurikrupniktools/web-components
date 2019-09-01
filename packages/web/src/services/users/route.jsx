import React from 'react';
import { Consumer } from './context';

const createRoute = (Com, path, key) => ({
    path: path || '/users',
    component: !Com ? Consumer : routerProps => <Consumer render={Com} {...routerProps} />,
    key: key || 'Users'
});

export default createRoute;
