const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array},
    color: { type:Array },
    price: { type: String, required: true },
    inStock: {type:Boolean, default:true}, 
    
    date:{
      type:Date,
      default:Date.now
  }
},
);

module.exports = mongoose.model("Product", ProductSchema);
