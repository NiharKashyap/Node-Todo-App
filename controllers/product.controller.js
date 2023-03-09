const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.product_create = function (req, res) {
    console.log(req.body)
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

   const result = product.save()
   res.send('Saved successfully')
};