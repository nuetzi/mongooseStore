const React = require("react");

class Show extends React.Component {
// Want to clean up all the usage of this.prop
    render() {
        return (
            <div id="itemDisplay">
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{this.props.product.name}</h1> <br/>
                <h3>{this.props.product.description}</h3> <br/>
                <img src={this.props.product.img} className="responsiveWidth"/> <br/>
                { (this.props.product.price > 0)
                    ? <text>${this.props.product.price}</text>
                    : <text>FREE!</text>
                } <br/>
                { (this.props.product.qty > 0)
                    ? <text>{this.props.product.qty} available</text>
                    : <text>OUT OF STOCK</text>
                } <br/>
                <br/>
                { (this.props.product.qty > 0)
                    ? <form action = {`/products/${this.props.product._id}?_method=PATCH`}  method="POST">
                        <input type="submit" value='BUY'/>
                    </form>
                    : <text></text>
                } <br/>
                <br/>
                <br/>
                <a href="/products">Back</a> <br/>
                {/* Still might try to turn EDIT into a button */}
                <a href={`${this.props.product._id}/edit`}>Edit Product</a> <br/>
                <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE Product"/>
                </form>
            </div>
        );
    };
};

module.exports = Show;