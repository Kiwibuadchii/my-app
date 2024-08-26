import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {prod_name,product_code,qty,
        location_id,
        lot_no,
        suppllier_name,
        order_id,
        } = await request.json();
    // console.log(data,"request");
    await connectMongoDB();
    
    await Product.create({prod_name,product_code,qty,
        location_id,
        lot_no,
        suppllier_name,
        order_id,
        })
    return NextResponse.json({message:"Product created successfully"},{status:200})
}
export async function GET(req, res, next) {
    await connectMongoDB();
    const products = await Product.find({});
    return NextResponse.json(products,{status:200})
}