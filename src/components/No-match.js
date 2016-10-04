import React from 'react';
import { Link } from 'react-router';

const NoMatch = () => (
    <div>
      <h1> 404 - page could not be found! </h1>
      <p> Bring me back to home page of POA: <Link to="/">HOME</Link> </p>

    </div>

);

export default NoMatch;
