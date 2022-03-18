const React = require("react");

class Show extends React.Component {
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    render() {
        const { name, description, img, price, qty, _id } = this.props.product;
        return (
            <div className="itemDisplay">
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{name}</h1> <br/>
                <h3>{description}</h3> <br/>
                <img src={img ? img : "/images/noImage.jpg"} className="responsiveSize"/> <br/>
                {(price > 0) ? <text>${this.numberWithCommas(parseFloat(price).toFixed(2))}</text> : <text>FREE!</text>} <br/>
                {(qty > 0) 
                    ? <text>{this.numberWithCommas(qty)} available <br/> <br/>
                        <form action = {`/products/${_id}?_method=PATCH`}  method="POST">
                            <input type="submit" value="BUY"/>
                        </form></text>
                    : <text>OUT OF STOCK</text>
                } <br/>
                <a href="/products">Back</a> <br/>
                <br/>
                <br/>
                <a href={`${_id}/edit`}>Edit Product</a> <br/>
                <form action={`/products/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE Product"/>
                </form>
            </div>
        );
    };
};

module.exports = Show;