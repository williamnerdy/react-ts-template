import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';
import HomePage from 'pages/Home';
import PostsPage from 'pages/Posts';
import { HOME_PAGE, POSTS_PAGE } from 'constants/urls';

const Routes = () => (
  <Switch>
    <Route path={HOME_PAGE} exact>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </Route>
    <Route path={POSTS_PAGE}>
      <Suspense fallback={<Loading />}>
        <PostsPage />
      </Suspense>
    </Route>
  </Switch>
);

export default Routes;
