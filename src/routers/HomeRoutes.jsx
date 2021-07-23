import React from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { HeroScreen } from '../components/hero/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { TeamScreen } from '../components/team/TeamScreen';
import { Footer } from '../components/ui/Footer';

export const HomeRoutes = () => {
  return (
    <>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/" component={TeamScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  )
}