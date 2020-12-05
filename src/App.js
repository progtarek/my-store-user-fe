import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './layouts/Home/Home';

const App = ({ language }) => {
  return (
    <div className={`${language === 'ar' ? 'rtl' : ''}`}>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ general }) => ({
  language: general.language,
});
export default connect(mapStateToProps)(App);

// TODO replace arrow image with native css
