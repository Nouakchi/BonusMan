const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema({
    type: String,
    CA: Number,
    Segment: String,
    commune: String,
    province: String,
    region: String,
    address: String,
    longitude: String,
    latitude: String,
    full_name: String,
    n_contact: String,
    products:[mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('Store', StoreSchema);