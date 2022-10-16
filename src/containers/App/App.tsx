import React from 'react';
import SideMenu from 'components/SideMenu';
import { ThemeProvider } from 'styled-components';
import { ScreenClassProvider } from 'react-grid-system';
import {Route, Router, Switch} from "react-router-dom";
import { History } from 'history';
// theme
import {GlobalStyle} from 'theme/globalStyle';
// style
import {StyledMainApp, AppMainContainer, StyledRoutesContainer} from './style';
import './App.css';
import {routes} from "../../utils/routesHelper";
import {AuthContext} from "../../context/auth";

const routing = Object.values(routes).reduce
    <{ publicRoutes: IRoute[] }>((pV, cV) => {
    pV.publicRoutes.push(cV); // pV.publicRoutes = [Object1, Object2]
    return pV;
}, { publicRoutes: [] });

const InnerApp: React.FC = React.memo(() => {
    // renders
    const renderRoutes = (
        <React.Suspense fallback="">
            <Switch>
                {
                    routing.publicRoutes.map(route => (
                      <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                      />
                    ))
                }
            </Switch>
        </React.Suspense>
    )

    return (
        <AuthContext.Provider value={{token: 'Josue'}}>
            <AppMainContainer
                className="App"
            >
              {/* SideBar */}
              {
                <SideMenu />
              }

              <StyledRoutesContainer>
                {/* SideBar */}
                {renderRoutes}
              </StyledRoutesContainer>
            </AppMainContainer>
        </AuthContext.Provider>

    )
});

interface AppProps {
  history: History;
}

const App: React.FC<AppProps> = function App({
  history,
}) {
    return (
        <Router history={history}>
            <ScreenClassProvider>
                <ThemeProvider theme={{}}>
                    <GlobalStyle />
                    <InnerApp />
                </ThemeProvider>
            </ScreenClassProvider>
        </Router>
    );
}

export default React.memo(App);
