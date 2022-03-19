const React = require("react");

class Edit extends React.Component{
    render() {
        const { name, description, img, price, qty, _id } = this.props.product;
        return (
            <body>
                <title>Edit Product Info</title>
                <link rel="stylesheet" href="/css/app.css"/>
                <h1>Edit Product Info</h1>
                <div className="alignLeft">      
                    <form action={`/products/${_id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" defaultValue={name}/><br/>
                        Description: <input type="text" name="description" defaultValue={description}/><br/>
                        Image: <input type="text" name="img" defaultValue={img}/><br/>
                        Price: <input type="number" name="price" min="0" step="0.01" defaultValue={price}/><br/>
                        Quantity: <input type="number" name="qty" min="0" defaultValue={qty}/><br/>
                        <br/>
                        <br/>
                        <input type="submit" value="Submit Changes"/>
                    </form>
                </div>
            </body>
        );
    };
};

module.exports = Edit;