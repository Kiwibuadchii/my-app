import mongoose, { Schema } from "mongoose";

const ProductsSchema = new Schema(
    {
    product_code:String,
    prod_name:String,
    qty:Number,
    location_id:String,
    lot_no:String,
    suppllier_name:String,
    order_id:String,
    order_id:String,
    updated_at: {type:Date,default:Date.now}
    }

)

const Product =  mongoose.models.Product || mongoose.model("Product",ProductsSchema);

export default Product;