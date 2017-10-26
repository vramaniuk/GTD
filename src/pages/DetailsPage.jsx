import React from 'react';
import {Link} from 'react-router-dom'

const DetailsPage = () => (
    <div className="App-body">
        <h1>Card details Page</h1><br/>
        <Link to={`/`}>
          <h1>return</h1>
        </Link>
    </div>
);

export default DetailsPage;