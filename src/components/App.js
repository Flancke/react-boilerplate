import React from 'react';
import { Link } from 'react-router';

/* Das ist die Layout Component */

const App = ({ children }) => (
  <div className="Background">
    <header>
      <h1> <Link to="/">Title</Link> </h1>
      <Link className="test-class" to="/about">About </Link>
      <Link to="/table">Table</Link>
    </header>
    <div className="Main">
      <div className="Container">
        <section>
          {children || 'Welcome to POA'}
        </section>
      </div>
    </div>

  </div>
);

/* You can declare that a prop is a specific JS primitive.E.g. array, bool, function, object,  */
App.propTypes = { children: React.PropTypes.object };

export default App;
