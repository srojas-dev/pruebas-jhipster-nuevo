<<<<<<< Updated upstream
import React from 'react';


import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
=======
import React, { useEffect, useState }  from 'react';


import MenuItem from 'app/shared/layout/menus/menu-item';
import { addTranslationSourcePrefix } from 'app/shared/reducers/locale';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const EntitiesMenu = () => {
  const lastChange = useAppSelector(state => state.locale.lastChange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addTranslationSourcePrefix('services/asdasdads/'));
  }, [lastChange]);

>>>>>>> Stashed changes
  return (
    <>
      {/* prettier-ignore */}
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
