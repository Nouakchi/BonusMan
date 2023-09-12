const {Schema , model} = require('mongoose');

const OrderSchema = new Schema({
    product:{type:Schema.Types.ObjectId,ref:"Product"},
    qte:Number,
    date:String,
    store:{type:Schema.Types.ObjectId,ref:"Store"},
})

module.exports = model('Order', OrderSchema);