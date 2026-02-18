import './home.scss';

<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> Stashed changes
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

<<<<<<< Updated upstream
=======
import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
>>>>>>> Stashed changes
import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
<<<<<<< Updated upstream
=======
  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });
>>>>>>> Stashed changes

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
<<<<<<< Updated upstream
        <h1 className="display-4">¡Bienvenido, Java Hipster!</h1>
        <p className="lead">Esta es su página de inicio</p>
=======
        <h1 className="display-4">Vítejte, Java Hipster!</h1>
        <p className="lead">Toto je vaše domovská stránka</p>
>>>>>>> Stashed changes
        {
          (account?.login) ? (
            <div>
              <Alert color="success">
<<<<<<< Updated upstream
                Está conectado como &quot;{account.login}&quot;.
=======
                Jste přihlášen jako &quot;{account.login}&quot;.
>>>>>>> Stashed changes
              </Alert>
            </div>
          ) : (
            <div>
              <Alert color="warning">
<<<<<<< Updated upstream
                Si desea 
                <span>&nbsp;</span>
                <Link to="/login" className="alert-link">iniciar sesión</Link>
                , puede intentar con las cuentas predeterminadas:<br/>- Administrador (usuario=&quot;admin&quot; y contraseña=&quot;admin&quot;) <br/>- Usuario (usuario=&quot;user&quot; y contraseña=&quot;user&quot;).
              </Alert>

              <Alert color="warning">
                ¿Aún no tienes una cuenta?&nbsp;
                <Link to="/account/register" className="alert-link">Crea una cuenta</Link>
              </Alert>
=======
                Pokud se chcete 
                <span>&nbsp;</span>
                <a href={getLoginUrl()} className="alert-link">
                  přihlásit
                </a>
                , můžete vyzkoušet predvolené účty:<br/>- Administrátor (jméno=&quot;admin&quot; a heslo=&quot;admin&quot;) <br/>- Uživatel (jméno=&quot;user&quot; a heslo=&quot;user&quot;).
              </Alert>

>>>>>>> Stashed changes
            </div>
          )
        }
        <p>
<<<<<<< Updated upstream
          Si tiene preguntas sobre JHipster:
=======
          Pokud máte nějaké dotazy týkající se JHipster:
>>>>>>> Stashed changes
        </p>

        <ul>
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
<<<<<<< Updated upstream
              Página de inicio de JHipster
=======
              Domovská stránka JHipster
>>>>>>> Stashed changes
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
<<<<<<< Updated upstream
              JHipster en Stack Overflow
=======
              JHipster ve službě Stack Overflow
>>>>>>> Stashed changes
            </a>
          </li>
          <li>
            <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
<<<<<<< Updated upstream
              JHipster seguimiento de errores
=======
              Nahlašování chyb JHipster
>>>>>>> Stashed changes
            </a>
          </li>
          <li>
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
<<<<<<< Updated upstream
              Sala de chat pública de JHipster
=======
              Veřejná chatovací místnost JHipster
>>>>>>> Stashed changes
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
<<<<<<< Updated upstream
              contacto @jhipster en Twitter
=======
              Sledovat @jhipster ve službě Twitter
>>>>>>> Stashed changes
            </a>
          </li>
        </ul>

        <p>
<<<<<<< Updated upstream
          Si te gusta JHipster, danos una estrella en
=======
          Pokud se vám JHipster líbí, nezapomeňte nám dát hvězdičku ve službě
>>>>>>> Stashed changes
          {' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </Col>
    </Row>
  );
};

export default Home;

