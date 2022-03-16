const React = require("react");

class Index extends React.Component {
// I don't want this to remain as an unordered list
// Rather than list items, I might return a div instead
    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>Big Store</h1>
                <ul>
                    {
                        this.props.products.map((product, i) => {
                            return <li key={i}>
                                <a href={`/products/${product.id}`}> <h2>{product.name}</h2> </a> <br/>
                                <a href={`/products/${product.id}`}> <img src={product.img} className="responsiveWidth"/> </a> <br/>
                                { (product.price > 0)
                                    ? <text>${product.price}</text>
                                    : <text>FREE!</text>
                                } <br/>
                                { (product.qty > 0)
                                    ? <text>{product.qty} available</text>
                                    : <text>OUT OF STOCK</text>
                                } <br/>
                            </li>
                        })
                    }
                </ul>
                <nav>
                    <a href="/products/new">Add a New Product</a>
                </nav>
            </div>
        );
    };
};

module.exports = Index;