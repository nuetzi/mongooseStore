const React = require("react");

class Edit extends React.Component{
    render() {
        return (
            <body>
                <link rel="stylesheet" href="/css/app.css"/>      
                    <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
                        Description: <input type="text" name="description" defaultValue={this.props.product.description}/><br/>
                        Image: <input type="text" name="img" defaultValue={this.props.product.img}/><br/>
                        Price: <input type="number" name="price" min="0" defaultValue={this.props.product.price}/><br/>
                        Quantity: <input type="number" name="qty" min="0" defaultValue={this.props.product.qty}/><br/>
                        <br/>
                        <br/>
                        <input type="submit" value="Submit Changes"/>
                    </form>
            </body>
        );
    };
};

module.exports = Edit;