import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(req,res){
    let client= await clientPromise
    let db=client.db("bitlinks")
    const collection=db.collection("url")

    const body=await req.json();
    const check=await collection.findOne({shortUrl:body.shortUrl})
    console.log(body.url);
    if (check){
        return NextResponse.json({success:false, error:true, message:"You cannot use this short url"});
    }
    await collection.insertOne({"url":body.url, "shortUrl":body.shortUrl});
    return NextResponse.json({success:true, error:false, message:"Short url added successfully"});

}