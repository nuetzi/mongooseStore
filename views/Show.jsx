const React = require("react");

class Show extends React.Component {
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    render() {
        const { name, description, img, price, qty, _id } = this.props.product;
        return (
            <body>
            <title>{name}</title>
            <div className="itemDisplay">
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>{name}</h1> <br/>
                <h3>{description}</h3>
                <img src={img ? img : "/images/noImage.jpg"} className="responsiveSize"/>
                <h4>{(price > 0) ? `$${this.numberWithCommas(parseFloat(price).toFixed(2))}` : <p style={{color:"green"}}>FREE!</p>}</h4>
                <h5>{(qty > 0) 
                    ? <text>{this.numberWithCommas(qty)} available <br/> <br/>
                        <form action = {`/products/${_id}?_method=PATCH`}  method="POST">
                            <input type="submit" value="BUY"/>
                        </form></text>
                    : <p style={{color:"red"}}>OUT OF STOCK</p>}</h5> <br/>
                <br/>
                <br/>    
                <a href="/products">Back</a> <br/>
                <br/>
                <br/>
                <a href={`${_id}/edit`}>Edit Product</a> <br/>
                <form action={`/products/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE Product"/>
                </form>
            </div>
            </body>
        );
    };
};

module.exports = Show;