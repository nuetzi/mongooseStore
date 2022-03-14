const React = require("react");

class Show extends React.Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{product.name}</h1> <br/>
                <h3>{product.description}</h3> <br/>
                <img src={product.img}/> <br/>
                ${product.price} <br/>
                {product.qty} available <br/>
            </div>
        );
    };
};

module.exports = Show;