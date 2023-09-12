const express = require('express');
const router = express.Router();
const Archive = require('../models/Archive');
const Order = require('../models/Order');

router.post('/',async (req,res)=>{
    try {
        await Archive.insertMany(req.body).then( ()=>{
             req.body.forEach(async element => {
               await Order.findByIdAndDelete(element._id);
            });
        }
        );
        res.json(archiveData);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;