const React = require("react");

class Show extends React.Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{this.props.product.name}</h1> <br/>
                <h3>{this.props.product.description}</h3> <br/>
                <img src={this.props.product.img}/> <br/>
                ${this.props.product.price} <br/>
                { (this.props.product.qty > 0)
                    ? <text>{this.props.product.qty} available</text>
                    : <text>"OUT OF STOCK"</text>
                } <br/>
            </div>
        );
    };
};

module.exports = Show;