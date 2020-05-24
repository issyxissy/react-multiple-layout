import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout';
import TestLayout from 'layouts/TestLayout';

import Home from 'pages/home';
import About from 'pages/about';
import Test from 'pages/test';
import NotFound from 'pages/not-found';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout
          exact
          path="/"
          component={Home}
          layout={DefaultLayout}
        />
        <RouteWithLayout path="/about" component={About} layout={TestLayout} />
        <RouteWithLayout path="/test" component={Test} layout={TestLayout} />
        <RouteWithLayout path="*" component={NotFound} layout={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
};

interface Layout {
  component: any;
  path?: string;
  exact?: boolean;
  layout: any;
}

const RouteWithLayout: React.FC<Layout> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AppRouter;
