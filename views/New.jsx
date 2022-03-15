const React = require("react");

class New extends React.Component {
    render() {
        return (
            <body>
            <link rel="stylesheet" href="/css/app.css"/>
                <h1>Add a New Product</h1>
                <form action="/products" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Description: <input type="text" name="description"/><br/>
                    Image: <input type="text" name="img"/><br/>
                    Price: <input type="number" name="price" min="0" step="0.01"/><br/>
                    Quantity: <input type="number" name="qty" min="0"/><br/>
                    <input type="submit" name="" value="Submit Product" />
                </form>
            </body>
        );
    };
};

module.exports = New;