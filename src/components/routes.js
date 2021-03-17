import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, About } from '../pages';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/About"><About /></Route>
      <Route>
        404 not found.
      </Route>
    </Switch>
  )
}