const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    ImageUrl:String,
    prodName:String,
    price:Number,
    stores:[mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('Product', ProductSchema);