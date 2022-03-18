const React = require("react");

class Index extends React.Component {
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    

    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>Big Store</h1>
                <div className="indexContainer">
                    {
                        this.props.products.map((product, i) => {
                            const { id, name, img, price, qty } = product;
                            return <div className="indexProduct" key={i}>
                                <a href={`/products/${id}`}> <h2>{name}</h2> </a>
                                <a href={`/products/${id}`}> <img src={img ? img : "/images/noImage.jpg"} className="responsiveSize"/> </a> <br/>
                                {(price > 0) ? <text>${this.numberWithCommas(parseFloat(price).toFixed(2))}</text> : <text>FREE!</text>} <br/>
                                {(qty > 0) ? <text>{this.numberWithCommas(qty)} available</text> : <text>OUT OF STOCK</text>}
                            </div>
                        })
                    }
                </div>
                <br/>
                <br/>
                <nav>
                    <h4><a href="/products/new">Add a New Product</a></h4>
                </nav>
            </div>
        );
    };
};

module.exports = Index;