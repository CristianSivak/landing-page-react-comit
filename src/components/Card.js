import React from 'react';
import './Card.css'

function Card (props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <div className="card col" style={{width : "18rem"}}>
            <img className="card-img-top" src="http://placehold.jp/500x325.png" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title {number}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="card-header text-center">
                    <div className="card-body">
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
    
    
    return (
        <div className="container">
                <div className="row">
                    {listItems}
                </div>
        </div>
    );
}
 
export default Card;