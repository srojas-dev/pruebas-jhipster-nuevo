import React from 'react';


import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img
      src="content/images/logo-jhipster.png"
      alt="Logo"
    />
  </div>
);

export const Brand = () => (
<NavbarBrand tag={Link} to="/" className="brand-logo">
  <BrandIcon />
<<<<<<< Updated upstream
  <span className="brand-title">Asdasd</span>
=======
  <span className="brand-title">Asdasdads</span>
>>>>>>> Stashed changes
  <span className="navbar-version">{VERSION.toLowerCase().startsWith('v') ? VERSION : `v${VERSION}`}</span>
</NavbarBrand>
);

export const Home = () => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
<<<<<<< Updated upstream
      <span>Inicio</span>
=======
      <span>Domů</span>
>>>>>>> Stashed changes
    </NavLink>
  </NavItem>
);
