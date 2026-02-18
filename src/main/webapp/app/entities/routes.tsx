import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

<<<<<<< Updated upstream
=======
import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';
>>>>>>> Stashed changes

/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
<<<<<<< Updated upstream
=======
  const store = getStore();
  store.injectReducer('asdasdads', combineReducers(entitiesReducers as ReducersMapObject));
>>>>>>> Stashed changes
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
