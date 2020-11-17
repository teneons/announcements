import React, { Component } from 'react';
import Header from '../Header/Header';
import ListAncmts from '../ListAncmts/ListAncmts';


export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <ListAncmts />
    </div>
  );
}
}
