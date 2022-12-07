import React, { Suspense, Fragment, useContext } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { routes } from "src/routes";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import PageLoading from "src/component/PageLoading";
import AuthGuard from "src/component/AuthGuard";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "src/theme";
import SettingsContext from "src/context/SettingsContext";
import UpcomingContext from "src/context/Upcoming";
import LiveContext from "src/context/Live";
import OddsContext from "src/context/Odds";
import { MoralisProvider } from "react-moralis";
const history = createBrowserHistory();

function App() {
  const themeSeeting = useContext(SettingsContext);
  const theme = createTheme({
    theme: themeSeeting.settings.theme
  });
  return (
    <div className="App">
      <MoralisProvider serverUrl="https://bbibfzonzgpv.usemoralis.com:2053/server" appId="a8LbiCRGd46kUCztoOzFxedIfKuvdiEoFo9cwEwD">
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <LiveContext>
              <UpcomingContext>
                <OddsContext>
                  <AuthContext>
                    <Router history={history}>
                      <RenderRoutes data={routes} />
                    </Router>
                  </AuthContext>
                </OddsContext>
              </UpcomingContext>
            </LiveContext>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MoralisProvider>
    </div>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
