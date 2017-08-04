import React from 'react';
import { Route } from 'react-router-dom';

import asyncComponent from './asyncComponents';

//dont forget to rtreive all the reducers that a component is dependent on

//here Home_component is dependent on only Home_Reducer
const AsyncHome = asyncComponent(
  () => import('../containers/Home/Home_Component'),
  () => import('../reducers/Home_Reducer')
);

//here About_Component is dependent on both Home_Reducer and About_Reducer
//ayncComponent will handle the duplicates..
const AsyncAbout = asyncComponent(
  () => import('../containers/About/About_Component'),
  () => {
    return Promise.all([
      import('../reducers/Home_Reducer'),
      import('../reducers/About_Reducer')
    ]);
  }
);

const RouterComponent = () => {
  return (
    <div>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/About" component={AsyncAbout} />
    </div>
  );
};

export default RouterComponent;
