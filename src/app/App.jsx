import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Enzyme unit testing with React and Redux in ES6</h1>
        <p>Examples:</p>
        <ul>
          <li><Link to="/todos">Todos App</Link></li>
        </ul>
      </div>
    );
  }
})
