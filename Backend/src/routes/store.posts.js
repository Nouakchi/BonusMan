const express = require('express');
const router = express.Router();
const Store = require('../models/Store');
const Product = require('../models/Product');
const fetch = require('node-fetch');
require('dotenv/config');

//insert a store
router.post('/',async (req,res)=>{
    const store = new Store({
     "type": req.body.type,
     "CA": req.body.CA,
     "Segment": req.body.Segment,
     "commune": req.body.commune,
     "province": req.body.province,
     "region": req.body.region,
     "address": req.body.address,
     "longitude": req.body.longitude,
     "latitude": req.body.latitude,
     "full_name": req.body.full_name,
     "n_contact": req.body.n_contact,
     "products": []
    });
    try {
        const savedStore = await store.save()
        res.json(savedStore);
    } catch (error) {
        res.json({message: error});
    }
})
// add a product to a store
/*
router.post('/:Id',async (req,res)=>{
    try {
        Store.findOneAndUpdate(
            { _id: req.params.Id }, 
            { $addToSet: { products: req.body._id} },
           function (error, success) {
                 if (error) {
                     console.log(error);
                 } else {
                     console.log(success);
                 }
                })
        Product.findOneAndUpdate(
        {_id: req.body._id},
        {$addToSet: { stores: req.params.Id}},
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
           }
        );
    } catch (error) {
        res.json({message: error});
    }
})
*/
//get all stores
router.get('/',async (req,res)=>{
    try {
        const storeData = await Store.find();
        res.json(storeData);
    } catch (error) {
        res.json({message: error});
    }
});
//get a specific store
router.get('/:Id',async (req,res)=>{
    try {
        const storeData = await Store.find({_id:req.params.Id});
        res.json(storeData);
    } catch (error) {
        res.json({message: error});
    }
});
//get stores by region
router.get('/position/:latLng',async (req,res)=>{
    try {
        const latLng = JSON.parse(req.params.latLng);
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' 
        + latLng.latitude + ',' + latLng.longitude + '&key=' + process.env.API_KEY;
        await fetch(url)
        .then((response) => response.json())
        .then(async (responseJson) => {
            var stateName = responseJson.results[0].address_components
            .filter(x => x.types
                .filter(t => t == 'locality').length > 0)[0].short_name
                const storeData = await Store.find({region: { $regex: stateName, $options: 'i' }});
                res.json(storeData);
        })
    } catch (error) {
        res.json({message: error});
    }
})
module.exports = router;