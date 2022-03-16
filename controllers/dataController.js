const Product = require("../models/products.js");

const dataController = {
    index(req, res, next) {
        Product.find({}, (error, allProducts) => {
            if(error) {
                res.status(404).send({ msg: error.message });
            } else {
                res.locals.data.products = allProducts;
                next();
            };
        });
    },

    destroy(req, res, next) {
        Product.findByIdAndRemove(req.params.id, (error, product) => {
            if(error) {
                res.status(404).send({ msg: error.message });
            } else {
                res.locals.data.product = product;
                next();
            };
        });
    },

    update(req, res, next) {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedProduct) => {
            if(error) {
                res.status(404).send({ msg: error.message });
            } else {
                res.locals.data.product = updatedProduct;
                next();
            };
        });
    },

    create(req, res, next) {
        Product.create(req.body, (error, createdProduct) => {
            if(error) {
                res.status(404).send({ msg: error.message });
            } else {
                res.locals.data.product = createdProduct;
                next();
            };
        });
    },

    show(req, res, next) {
        Product.findById(req.params.id, (error, foundProduct) => {
            if(error) {
                res.status(404).send({ msg: error.message });
            } else {
                res.locals.data.product = foundProduct;
                next();
            };
        });
    },

    buy(req, res, next) {
        Product.findByIdAndUpdate(req.params.id, { $inc:{qty:(-1)} }, { new: true }, (error, boughtProduct) => {
            if(error) {
                res.status(404).send({ msg: error.message });
            } else {
                res.locals.data.product = boughtProduct;
                next();
            };
        });
    }
};

module.exports = dataController;