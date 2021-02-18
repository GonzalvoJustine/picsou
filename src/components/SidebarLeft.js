import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

function SidebarLeft() {

    const routes = [
        {
            path: "/mon-compte/mes-informations",
            exact: true,
            sidebar: () => <div></div>,
            main: () => <div>
                            <h2>Mes informations</h2>
                            <p>Nom : Test</p>
                            <p>Prénom : Bubu</p>
                            <h3>Description : </h3>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
        },
        {
            path: "/mon-compte/ma-photo",
            sidebar: () => <div></div>,
            main: () => <h2>Ma photo</h2>
        }
    ];

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
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
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default SidebarLeft;
