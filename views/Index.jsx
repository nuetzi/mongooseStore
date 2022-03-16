const React = require("react");

class Index extends React.Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>Big Store</h1>
                    <div className="parentDiv">
                    {
                        this.props.products.map((product, i) => {
                            const { id, name, img, price, qty } = product;
                            return <div className="indexProduct" key={i}>
                                <a href={`/products/${id}`}> <h2>{name}</h2> </a>
                                <a href={`/products/${id}`}> <img src={img ? img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} className="responsiveSize"/> </a> <br/>
                                {(price > 0) ? <text>${price}</text> : <text>FREE!</text>} <br/>
                                {(qty > 0) ? <text>{qty} available</text> : <text>OUT OF STOCK</text>}
                            </div>
                        })
                    }
                    </div>
                <br/>
                <br/>
                <nav>
                    <a href="/products/new">Add a New Product</a>
                </nav>
            </div>
        );
    };
};

module.exports = Index;