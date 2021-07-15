import React from 'react';
import Card from './Card'

const Jumbotron = () => {
    const numbers = [1, 2, 3, 4];
    return ( 
        <div className="container">
            <div className="jumbotron card bg-light mb-3">
                <div className="container">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
                </div>
            </div>
            <Card numbers={numbers}/> 
        </div>
    );
}
 
export default Jumbotron;