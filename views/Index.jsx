const React = require("react");

class Index extends React.Component {
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    render() {
        return (
            <body>
            <title>Big Time Fun Store of Needful Things</title>
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>Big Time Fun Store of Needful Things</h1>
                <div className="indexContainer">
                    {
                        this.props.products.map((product, i) => {
                            const { id, name, img, price, qty } = product;
                            return <div className="indexProduct" key={i}>
                                <a href={`/products/${id}`}> <h2>{name}</h2> </a>
                                <a href={`/products/${id}`}> <img src={img ? img : "/images/noImage.jpg"} className="responsiveSize"/> </a>
                                <h4>{(price > 0) ? `$${this.numberWithCommas(parseFloat(price).toFixed(2))}` : <p style={{color:"green"}}>FREE!</p>}</h4>
                                <h5>{(qty > 0) ? `${this.numberWithCommas(qty)} available` : <p style={{color:"red"}}>OUT OF STOCK</p>}</h5>
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
            </body>
        );
    };
};

module.exports = Index;