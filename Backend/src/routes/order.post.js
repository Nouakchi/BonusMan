const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
router.get('/:Id',async (req,res)=>{
    try {
        const orderData = await Order.find({store:req.params.Id}).select("product qte date store").populate({path:"product",model:"Product"});
        res.json(orderData);
    } catch (error) {
        res.json({message: error});
    }
});


router.post('/', async (req,res) => {
    console.log(req.body);
    const order = new Order({
        product:req.body.product,
        store:req.body.store,
        qte:req.body.qte,
        date:req.body.date
    });
    try {
        const savedOrder = await order.save()
        res.json(savedOrder);
    } catch (error) {
        res.json({message: error});
    }
})

router.post('/update',async (req,res)=>{
    try {
        const savedOrder = await Order.findByIdAndUpdate(req.body._id,{qte:req.body.qte});
        res.json(savedOrder);
    } catch (error) {
        res.json({message: error});
    }
})
module.exports = router;