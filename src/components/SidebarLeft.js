import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function SidebarLeft () {
  /**
   * Create routes
   * Manager sidebar link and content
   * @type {({path: string, sidebar: (function()), exact: boolean, main: (function())}|{path: string,
   * sidebar: (function()), main: (function())})[]}
   */
  const routes = [
    {
      path: '/mon-compte/mes-informations',
      exact: true,
      sidebar: function information () {
        return (
          <div></div>
        );
      },
      main: function informations () {
        return (
          <div>
            <h2>Mes informations</h2>
            <p>Nom : Test</p>
            <p>Prénom : Bubu</p>
            <h3>Description : </h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
              comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
              The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
            </p>
          </div>
        );
      }
    },
    {
      path: '/mon-compte/ma-photo',
      sidebar: function photo () {
        return (
          <div></div>
        );
      },
      main: function photos () {
        return (
          <h2>Ma photo</h2>
        );
      }
    }
  ];

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0'
          }}
        >
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                  <NavLink to="/mon-compte/mes-informations" className="nav-link color-sidebar">Mes informations</NavLink>
              </li>
              <li>
                  <NavLink to="/mon-compte/ma-photo" className="nav-link color-sidebar">Ma photo</NavLink>
              </li>
            </ul>

            <Switch>
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  {route.sidebar}
                </Route>
              ))}
            </Switch>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  {route.main}
                </Route>
              ))}
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default SidebarLeft;
