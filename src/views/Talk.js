import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Talk({match}) {
    return (
        <div>
            <div>I'm the talk-to-someone view!</div>
            <Link to="/chat">Click here to chat to someone</Link>
        </div>
    )
}

export default Talk;