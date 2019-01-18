import React, { Fragment } from 'react';
import NonAbstractedComponent from './NonAbstractedComponent';
import AbstractedComponent from './AbstractedComponent';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NonAbstractedComponent />
        <hr />
        <AbstractedComponent />
      </Fragment>
    )
  }
}

export default App;
