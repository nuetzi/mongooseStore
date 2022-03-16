const React = require("react");

class Show extends React.Component {
    render() {
        const { name, description, img, price, qty, _id } = this.props.product;
        return (
            <div id="itemDisplay">
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{name}</h1> <br/>
                <h3>{description}</h3> <br/>
                <img src={img} className="responsiveWidth"/> <br/>
                {(price > 0) ? <text>${price}</text> : <text>FREE!</text>} <br/>
                {(qty > 0) 
                    ? <text>{qty} available <br/> <br/>
                        <form action = {`/products/${_id}?_method=PATCH`}  method="POST">
                            <input type="submit" value='BUY'/>
                        </form></text>
                    : <text>OUT OF STOCK</text>
                } <br/>
                <br/>
                <br/>
                <a href="/products">Back</a> <br/>
                {/* Still might try to turn EDIT into a button */}
                <a href={`${_id}/edit`}>Edit Product</a> <br/>
                <form action={`/products/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE Product"/>
                </form>
            </div>
        );
    };
};

module.exports = Show;