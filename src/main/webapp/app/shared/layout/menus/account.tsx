import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
<<<<<<< Updated upstream

=======
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getLoginUrl } from 'app/shared/util/url-utils';
>>>>>>> Stashed changes
import { NavDropdown } from './menu-components';


const accountMenuItemsAuthenticated = () => (
  <>
<<<<<<< Updated upstream
    <MenuItem icon="wrench" to="/account/settings" data-cy="settings">Ajustes</MenuItem>
    <MenuItem icon="lock" to="/account/password" data-cy="passwordItem">Contraseña</MenuItem>
    <MenuItem icon="sign-out-alt" to="/logout" data-cy="logout">Cerrar la sesión</MenuItem>
=======
    <MenuItem icon="sign-out-alt" to="/logout" data-cy="logout">Odhlásit se</MenuItem>
>>>>>>> Stashed changes
  </>
  );

const accountMenuItems = () => (
  <>
<<<<<<< Updated upstream
    <MenuItem id="login-item" icon="sign-in-alt" to="/login" data-cy="login">Iniciar sesión</MenuItem>
    <MenuItem icon="user-plus" to="/account/register" data-cy="register">Crear una cuenta</MenuItem>
=======
    <DropdownItem id="login-item" tag="a" href={getLoginUrl()} data-cy="login"><FontAwesomeIcon icon="sign-in-alt" /> Přihlášení</DropdownItem>
>>>>>>> Stashed changes
  </>
);

export const AccountMenu = ({ isAuthenticated = false }) => (
<<<<<<< Updated upstream
  <NavDropdown icon="user" name="Cuenta" id="account-menu" data-cy="accountMenu">
=======
  <NavDropdown icon="user" name="Účet" id="account-menu" data-cy="accountMenu">
>>>>>>> Stashed changes
    {isAuthenticated && accountMenuItemsAuthenticated()}
    {!isAuthenticated && accountMenuItems()}
  </NavDropdown>
);

export default AccountMenu;
