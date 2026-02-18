<<<<<<< Updated upstream
import React from 'react';

import { NavDropdown } from './menu-components';
import EntitiesMenuItems from 'app/entities/menu';
=======
import React, { Suspense } from 'react';

import { NavDropdown } from './menu-components';

const EntitiesMenuItems = React.lazy(() => import('app/entities/menu').catch(() => import('app/shared/error/error-loading')));

>>>>>>> Stashed changes

export const EntitiesMenu = () => (
  <NavDropdown
    icon="th-list"
<<<<<<< Updated upstream
    name="Entidades"
=======
    name="Entity"
>>>>>>> Stashed changes
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
<<<<<<< Updated upstream
    <EntitiesMenuItems />
=======
    <Suspense fallback={<div>loading...</div>}>
      <EntitiesMenuItems />
    </Suspense>
>>>>>>> Stashed changes
  </NavDropdown>
);
