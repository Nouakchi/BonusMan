const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//insert a product
router.post('/',async (req,res)=>{
    const product = new Product({
        ImageUrl:req.body.ImageUrl,
        prodName:req.body.prodName,
        price:req.body.price,
        stores:[]
    });
    try {
        const savedProduct = await product.save()
        res.json(savedProduct);
    } catch (error) {
        res.json({message: error});
    }
})
//get 
router.get('/',async (req,res)=>{
    try {
        const savedProduct = await Product.find();
        res.json(savedProduct);
    } catch (error) {
        res.json({message: error});
    }
})

module.exports = router;