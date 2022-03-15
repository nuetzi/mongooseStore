const React = require("react");

class Show extends React.Component {
    render() {
        return (
            <div id="itemDisplay">
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{this.props.product.name}</h1> <br/>
                <h3>{this.props.product.description}</h3> <br/>
                <img src={this.props.product.img} className="responsiveWidth"/> <br/>
                ${this.props.product.price} <br/>
                { (this.props.product.qty > 0)
                    ? <text>{this.props.product.qty} available</text>
                    : <text>OUT OF STOCK</text>
                } <br/>
                <br/>
                <br/>
                <a href="/products">Back</a> <br/>
                <a href={`${this.props.product._id}/edit`}>Edit Product</a> <br/>
                <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE Product"/>
                </form>
            </div>
        );
    };
};

module.exports = Show;